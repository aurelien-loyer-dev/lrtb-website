/* LRTB — Live Ticker */
function Ticker() {
  const items = [
    `${D.stats.clubs} clubs affiliés`,
    `${D.stats.licensed} licenciés · saison 2026`,
    "Championnat 974 · J3 le 2 mai",
    "Sélection White Sharks",
    "Partenaire FFTB · USEP · UNSS",
    "Open de l'Ouest · 25 avril",
  ];
  const track = [...items, ...items];
  return (
    <div className="live-ticker">
      <div className="track">
        {track.map((it, i) => (
          <span className="item" key={i}>
            <span className={"star " + (i % 2 ? "blue" : "")} />{it}
          </span>
        ))}
      </div>
    </div>
  );
}
