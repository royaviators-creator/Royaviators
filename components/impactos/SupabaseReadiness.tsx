import { rowLevelSecurityNotes, supabaseTables } from "@/lib/impactos/supabase-schema";

export function SupabaseReadiness() {
  return (
    <section className="os-readiness-panel">
      <div>
        <p className="os-kicker">Supabase-ready architecture</p>
        <h3>Tenant data model prepared for real implementation.</h3>
        <p>
          This MVP uses demo data only. The table map below documents the intended Supabase foundation for multi-tenant storage and access control.
        </p>
      </div>
      <div className="os-table-map">
        {Object.entries(supabaseTables).map(([key, table]) => (
          <article key={key}>
            <span>{key}</span>
            <strong>{table}</strong>
          </article>
        ))}
      </div>
      <ul>
        {rowLevelSecurityNotes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
