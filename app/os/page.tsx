import { redirect } from "next/navigation";
import { getDefaultDemoWorkspacePath } from "@/lib/impactos/demo-fixtures";

export default function OSIndexPage() {
  redirect(getDefaultDemoWorkspacePath());
}
