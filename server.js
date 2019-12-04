const express = require("express");
const app = express();
const port = 3000;

app.use(require("cors")())

app.use(express.json());

app.use("/api/v1", require("./v1/router"));

app.listen(port, () => console.log(`Listening on port ${port}`))