import ElPaisRSS from "../pages/ElPaisRSS.astro";

const rssFeeds = [
  {
    nombre: "El País",
    ruta: "/ElPaisRSS/",
    rss: "https://elpais.com/rss/portada.xml",
  },
  {
    nombre: "El Mundo",
    ruta: "/ElMundoRSS/",
    rss: "https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml",
  },
];

export default rssFeeds;
