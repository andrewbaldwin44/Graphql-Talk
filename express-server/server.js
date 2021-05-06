const express = require("express");
const app = express();

app
  .use(express.json())

  .get("/hello-world", (_, res) => res.json({ data: "Hello World" }))

  .get("/reverse/:word", (req, res) =>
    res.json({
      data: req.params.word
        .split("")
        .reverse()
        .join("")
    })
  )

  .listen(4004);
