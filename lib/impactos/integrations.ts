import type { IntegrationAdapterManifest, IntegrationPort } from "@/lib/impactos/types";

export type IntegrationHealth = {
  status: "available" | "configured" | "missing-credentials" | "degraded";
  message: string;
};

export type IntegrationAdapter = {
  manifest: IntegrationAdapterManifest;
  health(): IntegrationHealth;
};

function hasEnv(...keys: string[]) {
  return keys.every((key) => Boolean(process.env[key]));
}

function createAdapter(manifest: IntegrationAdapterManifest, requiredEnv: string[] = []): IntegrationAdapter {
  return {
    manifest,
    health() {
      if (manifest.credentialMode === "none") {
        return { status: "available", message: `${manifest.name} is available for development.` };
      }

      if (hasEnv(...requiredEnv)) {
        return { status: "configured", message: `${manifest.name} credentials are configured server-side.` };
      }

      return {
        status: "missing-credentials",
        message: `${manifest.name} is registered but missing server-side credentials.`,
      };
    },
  };
}

export const integrationAdapters: IntegrationAdapter[] = [
  createAdapter({
    id: "mock-data",
    name: "Mock Data Provider",
    port: "data",
    provider: "mock",
    version: "1.0.0",
    capabilities: ["read-demo-records", "resolve-demo-workspace"],
    credentialMode: "none",
  }),
  createAdapter(
    {
      id: "supabase-data",
      name: "Supabase Data Provider",
      port: "data",
      provider: "supabase",
      version: "1.0.0",
      capabilities: ["postgres", "rls", "tenant-records"],
      credentialMode: "server-only",
    },
    ["NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"],
  ),
  createAdapter(
    {
      id: "openai-model",
      name: "OpenAI Model Provider",
      port: "model",
      provider: "openai",
      version: "1.0.0",
      capabilities: ["chat-completions", "tool-calling", "assistant-orchestration"],
      credentialMode: "server-only",
    },
    ["OPENAI_API_KEY"],
  ),
  createAdapter(
    {
      id: "mapbox-maps",
      name: "Mapbox Map Provider",
      port: "maps",
      provider: "mapbox",
      version: "1.0.0",
      capabilities: ["map-rendering", "geocoding", "spatial-layers"],
      credentialMode: "server-only",
    },
    ["MAPBOX_ACCESS_TOKEN"],
  ),
  createAdapter(
    {
      id: "n8n-workflow",
      name: "n8n Workflow Provider",
      port: "workflow",
      provider: "n8n",
      version: "1.0.0",
      capabilities: ["workflow-dispatch", "webhook-ingest", "retryable-runs"],
      credentialMode: "server-only",
    },
    ["N8N_WEBHOOK_URL", "N8N_API_KEY"],
  ),
];

export function listIntegrationAdapters(port?: IntegrationPort) {
  return port ? integrationAdapters.filter((adapter) => adapter.manifest.port === port) : integrationAdapters;
}

export function getIntegrationAdapter(adapterId: string) {
  return integrationAdapters.find((adapter) => adapter.manifest.id === adapterId);
}
