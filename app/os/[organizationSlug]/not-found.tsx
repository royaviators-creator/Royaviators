import Link from "next/link";
import { getDefaultDemoWorkspacePath } from "@/lib/impactos/demo-fixtures";

export default function WorkspaceNotFound() {
  const demoWorkspacePath = getDefaultDemoWorkspacePath();

  return (
    <main className="os-not-found">
      <p className="os-kicker">ImpactOS</p>
      <h1>Workspace or module unavailable.</h1>
      <p>This demo only includes the OceanOS workspace for Deep Blue Drawdown and role-aware module access.</p>
      <Link className="btn btn-primary" href={demoWorkspacePath}>
        Open demo workspace
      </Link>
    </main>
  );
}
