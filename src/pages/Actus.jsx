/* LRTB — Actualités page */
function Actus() {
  return (
    <div>
      <div className="page-head">
        <div className="crumb">05 — Actualités LRTB</div>
        <h1>Actualités<span style={{ color: "var(--violet)" }}>.</span></h1>
        <p className="sub">Résultats, vie fédérale, sélections, arbitrage, partenariats scolaires. Le fil d'actualité de la ligue.</p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px 80px" }}>
        {D.news.map((n, i) => (
          <article key={n.id} style={{
            display: "grid", gridTemplateColumns: "180px 1fr",
            gap: 40, padding: "40px 0",
            borderBottom: i < D.news.length - 1 ? "1px solid var(--line)" : "none"
          }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: ".1em" }}>
                {n.date.split("-").reverse().join(".")}
              </div>
              <div style={{
                marginTop: 12, display: "inline-block",
                padding: "4px 10px", border: "1px solid var(--line)", borderRadius: 99,
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em",
                textTransform: "uppercase", color: "var(--violet)"
              }}>{n.cat}</div>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.01em", lineHeight: 1.2, margin: 0 }}>
                {n.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.6, marginTop: 14 }}>
                {n.excerpt}
              </p>
              <a style={{
                marginTop: 16, display: "inline-block",
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em",
                color: "var(--violet)", textDecoration: "none", cursor: "pointer"
              }}>LIRE L'ARTICLE →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
