/* LRTB — Ligue Réunionnaise de Tchoukball */
window.TL_DATA = {
  league: {
    name: "LRTB",
    fullName: "Ligue Réunionnaise de Tchoukball",
    founded: 2015,
    president: "Thierry Grimaud",
    affiliation: "Fédération Française de Tchoukball (FFTB)",
    instagram: "@lrtchoukball",
    instagramUrl: "https://www.instagram.com/lrtchoukball/",
    email: "tchoukballreunion@hotmail.fr",
    site: "tchoukball-reunion.ovh",
    seat: "La Réunion · 974",
  },

  nav: [
    { id: "home",        label: "Accueil" },
    { id: "clubs",       label: "Clubs" },
    { id: "competitions",label: "Compétitions" },
    { id: "selections",  label: "Sélections 974" },
    { id: "ressources",  label: "Ressources" },
    { id: "actus",       label: "Actualités" },
    { id: "contact",     label: "Contact" },
  ],

  // 7 clubs affiliés LRTB — coordonnées approximatives pour la carte
  clubs: [
    { id: "tchoukleu",  name: "Tchouk'Leu",           city: "Saint-Leu",            founded: 2014, side: "ouest", x: 14, y: 56, president: "—", insta: "@tchouk_leu",        email: "contact@tchoukleu.re",          colors: "Bleu / Violet", licensed: 48 },
    { id: "palmi",      name: "Palmi'Tchouk",          city: "Plaine des Palmistes", founded: 2017, side: "est",   x: 62, y: 50, president: "—", insta: "@palmi_tchoukball",  email: "palmi.tchoukball@gmail.com",    colors: "Vert / Blanc",  licensed: 35 },
    { id: "braspanon",  name: "Bras Panon Tchoukball", city: "Bras-Panon",           founded: 2016, side: "est",   x: 74, y: 34, president: "—", insta: "@tc_braspanon",      email: "tc.braspanon@gmail.com",        colors: "Rouge / Noir",  licensed: 42 },
    { id: "stdenis",    name: "Tchouk Saint Denis",    city: "Saint-Denis",          founded: 2015, side: "nord",  x: 45, y: 10, president: "—", insta: "@sd_tchoukball",     email: "tchoukbellepierre@gmail.com",   colors: "Bleu marine",   licensed: 61 },
    { id: "tampon",     name: "Tampon Tchoukball",     city: "Le Tampon",            founded: 2016, side: "sud",   x: 44, y: 70, president: "—", insta: "@asct_tchoukball",   email: "asct.tchoukball@gmail.com",     colors: "Orange / Bleu", licensed: 38 },
    { id: "stlouis",    name: "Saint-Louis Tchoukball",city: "Saint-Louis",          founded: 2018, side: "sud",   x: 28, y: 72, president: "—", insta: "@atp_tchoukball",    email: "atp.tchoukball@gmail.com",      colors: "Violet / Or",   licensed: 29 },
    { id: "sbtb",       name: "SBTB",                  city: "Sainte-Anne",          founded: 2019, side: "est",   x: 82, y: 26, president: "—", insta: "@sbtb_tchoukball",   email: "sbtb.tchoukball@gmail.com",     colors: "Cyan / Noir",   licensed: 33 },
  ],

  stats: {
    clubs: 7,
    licensed: 180,
    tournaments: 14,
    referees: 22,
    years: 11,
  },

  // Compétitions — tournois ligue + entraînements mutualisés de tous les clubs
  competitions: [
    { id: "c01", cat: "tournoi",      date: "2026-04-25", startTime: "09:00", endTime: "18:00", title: "Open de l'Ouest",             location: "Gymnase de Stella, Saint-Leu",         host: "tchoukleu", categ: "Toutes catégories" },
    { id: "c02", cat: "championnat",  date: "2026-05-02", startTime: "09:00", endTime: "17:00", title: "Championnat 974 · J3",         location: "Gymnase de Champ Fleuri, St-Denis",    host: "stdenis",   categ: "Senior" },
    { id: "c03", cat: "tournoi",      date: "2026-05-16", startTime: "10:00", endTime: "17:00", title: "Tournoi M12/M15 de l'Est",     location: "Gymnase de Bras-Panon",                host: "braspanon", categ: "M12 · M15" },
    { id: "c04", cat: "selection",    date: "2026-05-30", startTime: "14:00", endTime: "18:00", title: "Stage sélection Océan Indien", location: "Gymnase de Stella, Saint-Leu",         host: "lrtb",      categ: "Sélection 974" },
    { id: "c05", cat: "championnat",  date: "2026-06-06", startTime: "09:00", endTime: "17:00", title: "Championnat 974 · J4",         location: "Gymnase Hoarau 3 Mares, Le Tampon",   host: "tampon",    categ: "Senior" },
    { id: "c06", cat: "tournoi",      date: "2026-06-20", startTime: "09:00", endTime: "18:00", title: "Open de Saint-Louis",          location: "Gymnase Jean Joly, Saint-Louis",       host: "stlouis",   categ: "Toutes catégories" },
    { id: "c07", cat: "finale",       date: "2026-07-04", startTime: "13:00", endTime: "19:00", title: "Finale championnat 974",       location: "Gymnase Raphaël Barquissau, St-Denis", host: "lrtb",      categ: "Senior · M18" },
    { id: "c08", cat: "tournoi",      date: "2026-07-18", startTime: "09:00", endTime: "18:00", title: "Beach Tchouk · Saint-Leu",     location: "Plage des Brisants, Saint-Leu",        host: "tchoukleu", categ: "Senior" },
    { id: "c09", cat: "entrainement", date: "2026-04-22", startTime: "18:00", endTime: "20:00", title: "Entraînement ligue — M18",     location: "Gymnase de Champ Fleuri, Saint-Denis", host: "stdenis",   categ: "M18" },
    { id: "c10", cat: "entrainement", date: "2026-04-26", startTime: "09:00", endTime: "12:00", title: "Entraînement mutualisé sud",   location: "Gymnase Hoarau 3 Mares, Le Tampon",   host: "tampon",    categ: "Toutes catégories" },
  ],

  // Classement championnat 974 — senior (7 clubs)
  standings: {
    senior: [
      { rk: 1, club: "stdenis",   p: 6, w: 5, d: 1, l: 0, pf: 142, pa:  98, pts: 16 },
      { rk: 2, club: "tchoukleu", p: 6, w: 4, d: 1, l: 1, pf: 128, pa: 104, pts: 13 },
      { rk: 3, club: "braspanon", p: 6, w: 4, d: 0, l: 2, pf: 118, pa: 107, pts: 12 },
      { rk: 4, club: "tampon",    p: 6, w: 2, d: 2, l: 2, pf: 106, pa: 112, pts:  8 },
      { rk: 5, club: "palmi",     p: 6, w: 2, d: 1, l: 3, pf:  98, pa: 118, pts:  7 },
      { rk: 6, club: "stlouis",   p: 6, w: 1, d: 1, l: 4, pf:  88, pa: 124, pts:  4 },
      { rk: 7, club: "sbtb",      p: 6, w: 0, d: 1, l: 5, pf:  76, pa: 132, pts:  1 },
    ],
    m18: [
      { rk: 1, club: "tchoukleu", p: 4, w: 3, d: 0, l: 1, pf:  84, pa:  68, pts:  9 },
      { rk: 2, club: "braspanon", p: 4, w: 2, d: 1, l: 1, pf:  76, pa:  72, pts:  7 },
      { rk: 3, club: "stdenis",   p: 4, w: 2, d: 0, l: 2, pf:  70, pa:  70, pts:  6 },
      { rk: 4, club: "tampon",    p: 4, w: 1, d: 1, l: 2, pf:  64, pa:  78, pts:  4 },
      { rk: 5, club: "palmi",     p: 4, w: 0, d: 0, l: 4, pf:  48, pa:  90, pts:  0 },
    ],
  },

  // Sélections 974
  selections: {
    teams: [
      { id: "ws",   name: "White Sharks",       categ: "Senior · Océan Indien",  desc: "Sélection senior de la Réunion. Compétitions OI et internationales." },
      { id: "ws2",  name: "White Sharks M18",   categ: "M18 · Océan Indien",     desc: "Relève territoriale. Stage mensuel, tournois régionaux." },
      { id: "ws3",  name: "White Sharks Beach", categ: "Beach · Océan Indien",   desc: "Discipline beach. Championnats Indien et Pacifique." },
    ],
    palmares: [
      { year: "2024", title: "Champion · 1er Open International de Beach Tchoukball de l'Océan Indien", team: "White Sharks" },
      { year: "2024", title: "3e place · Open International Beach OI",                                   team: "White Sharks 2" },
      { year: "2023", title: "Finalistes · Coupe de l'Océan Indien",                                     team: "White Sharks" },
      { year: "2022", title: "Sélection Jeux des Îles de l'Océan Indien",                                team: "White Sharks" },
    ],
  },

  // Ressources
  ressources: [
    { id: "r1", kind: "PDF",    title: "Règlement sportif 2026",         size: "412 Ko",                  cat: "Règlement" },
    { id: "r2", kind: "PDF",    title: "Charte du fair-play",             size: "220 Ko",                  cat: "Règlement" },
    { id: "r3", kind: "PDF",    title: "Formulaire d'affiliation club",   size: "186 Ko",                  cat: "Affiliation" },
    { id: "r4", kind: "LINK",   title: "Devenir arbitre LRTB",            size: "Inscription en ligne",    cat: "Arbitrage" },
    { id: "r5", kind: "LINK",   title: "Certificat médical type",         size: "PDF fédéral",             cat: "Affiliation" },
    { id: "r6", kind: "LINK",   title: "Règles officielles FITB",         size: "Fédération internationale",cat: "Règlement" },
    { id: "r7", kind: "VIDEO",  title: "Tchoukball en 3 minutes",         size: "3:12 · YouTube",          cat: "Découvrir" },
    { id: "r8", kind: "PDF",    title: "Guide des entraîneurs jeunes",    size: "1,2 Mo",                  cat: "Formation" },
  ],

  // Actualités
  news: [
    { id: "n1", date: "2026-04-18", cat: "Compétition",  title: "Tchouk Saint Denis prend la tête du championnat après J2",    excerpt: "Deux victoires solides pour les Dionysiens qui s'installent en haut du tableau. Tchouk'Leu suit de près." },
    { id: "n2", date: "2026-04-12", cat: "Sélection",    title: "Stage White Sharks : 24 joueurs convoqués à Stella",           excerpt: "Le staff territorial a retenu 24 athlètes issus de 6 clubs pour préparer les échéances OI de l'été." },
    { id: "n3", date: "2026-04-05", cat: "Vie fédérale", title: "Saint-Louis Tchoukball officiellement affilié pour 2026",     excerpt: "Le club du Sud rejoint la ligue pour la saison 2026 avec 29 licenciés, renforçant le réseau réunionnais." },
    { id: "n4", date: "2026-03-28", cat: "Arbitrage",    title: "Session de formation arbitrage · 12 nouveaux brevets",        excerpt: "La ligue renforce son banc d'arbitres avec 12 diplômes régionaux livrés ce week-end." },
    { id: "n5", date: "2026-03-20", cat: "Jeunesse",     title: "USEP : 280 élèves initiés au tchoukball ce trimestre",        excerpt: "Le partenariat USEP-LRTB tourne à plein régime dans 14 écoles du département." },
  ],

  // Photos
  gallery: [
    { cat: "matches",  src: "images/tchoukleu.jpg", alt: "Action de tchoukball" },
    { cat: "events",   src: "images/OIBOI.png",     alt: "Open International" },
    { cat: "events",   src: "images/Plage1.jpg",    alt: "Beach tchoukball" },
    { cat: "events",   src: "images/montagne1.jpg", alt: "Stage altitude" },
    { cat: "training", src: "images/accueil.jpg",   alt: "Entraînement" },
    { cat: "matches",  src: "images/tchoukleu.jpg", alt: "Championnat 974" },
  ],
};
