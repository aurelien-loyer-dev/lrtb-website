/* LRTB — Sélections page */
function Selections() {
  return (
    <div>
      <div className="ws-hero">
        <div className="dots" />
        <div className="inner">
          <div className="crumb" style={{ color: "rgba(255,255,255,.5)", marginBottom: 20, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".15em" }}>SÉLECTIONS TERRITORIALES · 974</div>
          <h1>Sélections <span className="italic">974</span>.</h1>
          <p className="sub">Les équipes représentant la Réunion aux compétitions de l'Océan Indien et aux échéances internationales. Sélections effectuées par le staff territorial LRTB à partir des meilleurs éléments de chaque club affilié.</p>
        </div>
      </div>

      <section className="section reveal" style={{ paddingTop: 80 }}>
        <div className="section-head">
          <h2>Les trois <br />équipes.</h2>
          <p>Chaque sélection rassemble des joueurs issus de plusieurs clubs de la ligue.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, padding: "0 48px", maxWidth: 1400, margin: "0 auto" }}>
          {D.selections.teams.map(t => (
            <div key={t.id} style={{
              border: "1px solid var(--line)", borderRadius: 16, padding: 28,
              background: "var(--paper)"
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", color: "var(--muted)", textTransform: "uppercase" }}>{t.categ}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, margin: "12px 0 16px" }}>{t.name}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.55, fontSize: 15 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="palm-section">
        <div className="section-head reveal">
          <h2>Palmarès <span style={{ fontStyle: "italic", fontWeight: 500 }}>974</span>.</h2>
          <p>Les résultats des sélections réunionnaises sur la scène Océan Indien et internationale.</p>
        </div>
        <div className="palm-grid">
          {D.selections.palmares.map((p, i) => (
            <div className="palm-card reveal" key={i}>
              <div className="year"><span className="grad">{p.year}</span></div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.team}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
