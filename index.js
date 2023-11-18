const { createServer, get } = require("node:http");
const express = require("express");
const app = express();

const server = createServer(app);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 8000}`);
});
