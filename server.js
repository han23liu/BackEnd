const express = require("express");
var cors = require("cors");

const app = express();

let corsOptions = {
  origin: "https://front-test-app.herokuapp.com/",
  optionsSuccessStatus: 200,
};

/* sign in */
app.post("/signin", cors(corsOptions), (req, res) => {
  res.send("in 200");
});

app.get("/signin", (req, res) => {
  console.log("singin get");
  res.send("signin page");
});

/* sign up*/
app.post("/signup", (req, res) => {
  console.log("singup post");
  res.send("up 200");
});

app.get("/signup", (req, res) => {
  console.log("singup get");
  res.send("signup page");
});

/* litsen on port process.env.PORT || 5000 */
app.listen(5000);
