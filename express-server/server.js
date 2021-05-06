const express = require("express");
const app = express();

const users = require("./routes/users/users.routes");

app
  .use(express.json())

  .use("/users", users)

  .listen(4004);
