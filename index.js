import express from "express";

const app = express();

console.log("testtest one ");

app.get("/", (req, res) => {
  res.send("<p>YASYSYAYSYSY it works!!!</p>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
