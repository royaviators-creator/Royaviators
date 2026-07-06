import type { IntegrationPort, ProviderDefinition, ProviderId } from "@/lib/impactos/types";

export const providerRegistry: ProviderDefinition[] = [
  {
    id: "mock",
    name: "Mock Provider",
    description: "Development-only provider for deterministic tests and local platform contracts.",
    version: "1.0.0",
    ports: ["data", "file", "model", "embeddings", "search", "maps", "workflow", "analytics"],
    capabilityIds: ["configuration", "module-registry", "edition-registry", "search", "analytics", "maps", "workflow-runtime"],
    credentialMode: "none",
    replaceableBy: ["supabase", "openai", "mapbox", "n8n"],
  },
  {
    id: "supabase",
    name: "Supabase Provider",
    description: "Core v1 data, RLS, storage-compatible, and auth-compatible provider.",
    version: "1.0.0",
    ports: ["data", "file", "search"],
    capabilityIds: ["identity", "permissions", "configuration", "audit", "search"],
    credentialMode: "server-only",
    replaceableBy: ["mock"],
  },
  {
    id: "openai",
    name: "OpenAI Provider",
    description: "Model and embedding provider behind AI orchestration ports.",
    version: "1.0.0",
    ports: ["model", "embeddings"],
    capabilityIds: ["ai-orchestration", "ai-assistant"],
    credentialMode: "server-only",
    replaceableBy: ["mock"],
  },
  {
    id: "mapbox",
    name: "Mapbox Provider",
    description: "Map rendering, geocoding, and spatial layer provider behind map ports.",
    version: "1.0.0",
    ports: ["maps"],
    capabilityIds: ["maps"],
    credentialMode: "server-only",
    replaceableBy: ["mock"],
  },
  {
    id: "n8n",
    name: "n8n Provider",
    description: "Workflow dispatch and webhook provider behind workflow runtime ports.",
    version: "1.0.0",
    ports: ["workflow"],
    capabilityIds: ["automation", "workflow-runtime"],
    credentialMode: "server-only",
    replaceableBy: ["mock"],
  },
];

export function getProviderById(providerId: ProviderId) {
  return providerRegistry.find((provider) => provider.id === providerId);
}

export function listProviders(port?: IntegrationPort) {
  return port ? providerRegistry.filter((provider) => provider.ports.includes(port)) : providerRegistry;
}

export function canReplaceProvider(currentProviderId: ProviderId, nextProviderId: ProviderId) {
  return Boolean(getProviderById(currentProviderId)?.replaceableBy.includes(nextProviderId));
}
