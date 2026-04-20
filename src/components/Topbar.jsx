/* LRTB — Topbar */
function Topbar({ page, setPage }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navRef = React.useRef(null);
  const [pill, setPill] = React.useState({ left: 4, width: 0, ready: false });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useLayoutEffect(() => {
    if (!navRef.current) return;
    const active = navRef.current.querySelector("button.active");
    if (!active) return;
    const navRect = navRef.current.getBoundingClientRect();
    const btnRect = active.getBoundingClientRect();
    setPill({ left: btnRect.left - navRect.left, width: btnRect.width, ready: true });
  }, [page]);

  React.useEffect(() => { setMobileOpen(false); }, [page]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`topbar${scrolled ? " scrolled" : ""}`}>
        <div className="brand" onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          <div style={{
            width: 40, height: 40, borderRadius: 8, background: "var(--grad)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.02em",
            flexShrink: 0,
          }}>LR</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span className="mark">LRTB</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".14em", color: "var(--muted)", marginTop: 4 }}>LIGUE · RÉUNION</span>
          </div>
        </div>

        <nav ref={navRef}>
          <div
            className="nav-pill"
            style={{ left: pill.left, width: pill.width, opacity: pill.ready ? 1 : 0 }}
          />
          {D.nav.map(n => (
            <button
              key={n.id}
              className={page === n.id ? "active" : ""}
              onClick={() => setPage(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="meta">
          <button className="cta" onClick={() => setPage("contact")}>Espace clubs →</button>
          <button
            className={`burger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-overlay${mobileOpen ? " open" : ""}`} onClick={() => setMobileOpen(false)}>
        <nav className="mobile-nav" onClick={e => e.stopPropagation()}>
          <div className="mobile-nav-head">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 7, background: "var(--grad)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12,
              }}>LR</div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em" }}>LRTB</span>
            </div>
            <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Fermer">✕</button>
          </div>

          <div className="mobile-nav-links">
            {D.nav.map((n, i) => (
              <button
                key={n.id}
                className={`mobile-nav-item${page === n.id ? " active" : ""}`}
                onClick={() => setPage(n.id)}
                style={{ animationDelay: mobileOpen ? `${i * 0.045}s` : "0s" }}
              >
                <span className="mobile-nav-label">{n.label}</span>
                <span className="mobile-nav-arrow">→</span>
              </button>
            ))}
          </div>

          <div className="mobile-nav-foot">
            <button
              className="btn btn-grad"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setPage("contact")}
            >
              Espace clubs →
            </button>
            <p style={{ margin: "14px 0 0", fontSize: 11, color: "var(--muted)", textAlign: "center", fontFamily: "var(--font-mono)", letterSpacing: ".12em" }}>
              LIGUE · RÉUNION · 974
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
