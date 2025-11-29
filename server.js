const http = require("http");
const PORT = process.env.PORT || 3000;

const fullName = "Karl Vincent Magpantay";
const section = "BSIT-4102";
const quote = "The only way to do great work is to love what you do";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <div style="text-align:center; font-family: Arial, sans-serif; margin-top: 50px;">
        <h1>${fullName}</h1>
        <h2>${section}</h2>
        <p>${quote}</p>
      </div>
    `);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
