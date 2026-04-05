const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Salut tout le monde tu vois Joël ça marche ");
});

server.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
