const express = require("express");
const app = express();
const port = 5000;

/* sign in */
app.post("/signin", (req, res) => {
  res.send("in 200");
});

/* sign up*/
app.post("/signup", (req, res) => {
  res.send("up 200");
});

app.get("/", (req, res) => {
  res.send("home page");
});

/* litsen on port 5000 */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
