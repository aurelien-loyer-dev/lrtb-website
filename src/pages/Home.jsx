/* LRTB — Home page */
function Home({ setPage }) {
  const nextComp = React.useMemo(() => {
    return [...D.competitions]
      .sort((a, b) => (a.date + a.startTime).localeCompare(b.date + b.startTime))
      .find(c => c.date >= "2026-04-20") || D.competitions[0];
  }, []);
  const topStanding = D.standings.senior.slice(0, 3);

  const heroStats = [
    { n: D.stats.clubs,      label: "clubs affiliés" },
    { n: D.stats.licensed,   label: "licenciés" },
    { n: D.stats.referees,   label: "arbitres formés" },
    { n: D.stats.tournaments, label: "tournois / an" },
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-meta">
            <div className="chips">
              <span className="chip">Ligue officielle</span>
              <span className="chip">FFTB affiliée</span>
              <span className="chip">Depuis 2015</span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: ".14em" }}>
              SAISON 2026
            </span>
          </div>

          <h1 className="hero-headline">
            <span className="line">Ligue Réunionnaise</span>
            <span className="line"><span className="italic grad">de Tchoukball.</span></span>
          </h1>

          <div className="hero-bar">
            {heroStats.map(({ n, label }) => (
              <div className="col hero-stat" key={label}>
                <div className="hero-stat-n">{n}</div>
                <span className="eyebrow" style={{ marginTop: 8, display: "block" }}>{label}</span>
              </div>
            ))}
            <div className="actions">
              <button className="btn btn-primary" onClick={() => setPage("competitions")}>Compétitions →</button>
              <button className="btn btn-ghost" onClick={() => setPage("clubs")}>Les clubs</button>
            </div>
          </div>

          <div className="hero-canvas">
            <div className="photo" style={{ backgroundImage: "url(images/OIBOI.png)" }} />
            <div className="tint" />
            <div className="grain" />
            <div className="overlay">
              <div>
                <div className="eyebrow" style={{ color: "rgba(255,255,255,.65)" }}>Prochain rendez-vous</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, letterSpacing: "-0.01em", marginTop: 8, color: "white" }}>
                  {nextComp.title}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 6, letterSpacing: ".1em" }}>
                  {nextComp.date.split("-").reverse().join(".")} · {nextComp.location}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Ticker />

      <section className="section reveal">
        <div className="section-head">
          <h2>La ligue, <br />en chiffres.</h2>
          <p>Un réseau structuré, affilié à la Fédération Française de Tchoukball, qui couvre l'ensemble du territoire réunionnais depuis plus d'une décennie.</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="num">{D.stats.clubs}</div>
            <div><h3>Clubs affiliés</h3><p>Répartis sur les 4 microrégions.</p></div>
          </div>
          <div className="value-card">
            <div className="num">{D.stats.licensed}</div>
            <div><h3>Licenciés</h3><p>Saison 2026, tous âges confondus.</p></div>
          </div>
          <div className="value-card">
            <div className="num">{D.stats.tournaments}</div>
            <div><h3>Tournois / an</h3><p>Championnat + Open + sélections.</p></div>
          </div>
          <div className="value-card" style={{ borderRight: "none" }}>
            <div className="num">{D.stats.referees}</div>
            <div><h3>Arbitres formés</h3><p>Brevet régional LRTB.</p></div>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Classement <span style={{ fontStyle: "italic", fontWeight: 500 }}>senior</span>.</h2>
          <p>Le top 3 provisoire du championnat 974 à la mi-saison.</p>
        </div>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 48px" }}>
          {topStanding.map(s => {
            const c = clubById(s.club);
            return (
              <div key={s.rk} style={{
                display: "grid", gridTemplateColumns: "50px 1fr auto auto",
                gap: 20, alignItems: "center", padding: "22px 0",
                borderBottom: "1px solid var(--line)"
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, lineHeight: 1 }}>
                  <span className="grad">{s.rk}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20 }}>{c.name}</div>
                  <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 2 }}>{c.city}</div>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>
                  {s.w}V · {s.d}N · {s.l}D
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24 }}>
                  {s.pts} <span style={{ fontSize: 11, color: "var(--muted)", fontFamily: "var(--font-mono)" }}>PTS</span>
                </div>
              </div>
            );
          })}
          <div style={{ textAlign: "right", marginTop: 24 }}>
            <button className="btn btn-ghost" onClick={() => setPage("competitions")}>Classement complet →</button>
          </div>
        </div>
      </section>

      <div className="cta-panel reveal">
        <div className="bg" />
        <div className="content">
          <div>
            <h2>Affilier <br />votre club ?</h2>
            <p style={{ marginTop: 24 }}>Votre structure souhaite rejoindre la ligue ? Téléchargez le dossier d'affiliation et adressez-le à la LRTB pour la prochaine saison.</p>
            <button className="btn btn-primary" onClick={() => setPage("ressources")}>Dossier d'affiliation →</button>
          </div>
          <div className="side">
            <span className="eyebrow">Dernières actualités</span>
            <ul>
              {D.news.slice(0, 4).map(n => (
                <li key={n.id}>
                  <span>{n.date.split("-").reverse().slice(0, 2).join(".")}</span>
                  <span>{n.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
