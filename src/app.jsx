/* LRTB — App root */
function App() {
  const [page, setPage] = React.useState(() => {
    const stored = localStorage.getItem("lrtb-page");
    const valid = D.nav.map(n => n.id);
    return valid.includes(stored) ? stored : "home";
  });
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [tweaksOn, setTweaksOn] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("lrtb-page", page);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  React.useEffect(() => {
    const handler = (ev) => {
      const d = ev.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "__activate_edit_mode") setTweaksOn(true);
      if (d.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  React.useEffect(() => {
    const r = document.documentElement;
    const violet = `oklch(0.55 0.22 ${tweaks.accentHue})`;
    const indigo = `oklch(0.5 0.22 ${tweaks.accentHue - 30})`;
    const blue   = `oklch(0.52 0.2 ${tweaks.accentHue - 50})`;
    r.style.setProperty("--violet", violet);
    r.style.setProperty("--indigo", indigo);
    r.style.setProperty("--blue", blue);
    r.style.setProperty("--violet-2", `oklch(0.6 0.2 ${tweaks.accentHue + 20})`);
    r.style.setProperty("--grad", `linear-gradient(120deg, ${blue} 0%, ${indigo} 45%, ${violet} 75%, oklch(0.58 0.22 ${tweaks.accentHue + 30}) 100%)`);
    const isDark = tweaks.paper === "#0B1020";
    r.style.setProperty("--paper", tweaks.paper);
    r.style.setProperty("--ink", isDark ? "#FAF7F2" : "#0B1020");
    r.style.setProperty("--line", isDark ? "rgba(255,255,255,0.14)" : "rgba(11,16,32,0.14)");
    r.style.setProperty("--line-strong", isDark ? "rgba(255,255,255,0.28)" : "rgba(11,16,32,0.28)");
    r.style.setProperty("--muted", isDark ? "#9CA3C7" : "#5A6077");
    r.style.setProperty("font-size", (16 * tweaks.density) + "px");
  }, [tweaks]);

  useReveal();

  const Page = {
    home: Home, clubs: Clubs, competitions: Competitions,
    selections: Selections, ressources: Ressources, actus: Actus, contact: Contact
  }[page] || Home;

  return (
    <div className="shell">
      <Topbar page={page} setPage={setPage} />
      <main className="page"><Page setPage={setPage} /></main>
      <Footer setPage={setPage} />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} visible={tweaksOn} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
