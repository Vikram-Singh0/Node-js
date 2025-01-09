const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url}:New req received`;
  fs.appendFile("./log.txt", log, (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      switch (req.url) {
        case "/":
          res.end("Welcome home Vikram ");
          break;

        case "/about":
          res.end("You know everythingh about me");
          break
        default:
          res.statusCode = 404;
          res.end("404 Not Found");
      }
    }
  });
});

myserver.listen(5000, () => {
  console.log("my server stareted at port 5000 ");
});