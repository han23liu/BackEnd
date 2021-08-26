const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
const localPort = 5000;

/* sign in */
app.post("/signin", (req, res) => {
  res.send("in 200");
});

app.get("/signin", (req, res) => {
  res.send("signin page");
});

/* sign up*/
app.post("/signup", (req, res) => {
  res.send("up 200" + "req.body");
});

app.get("/signup", (req, res) => {
  res.send("signup page");
});

/* home page*/
app.get("/", (req, res) => {
  res.send("home page");
});

/* litsen on port 5000 */
app.listen(process.env.PORT || localPort);
