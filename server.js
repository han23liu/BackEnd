const express = require("express");
var cors = require("cors");
const app = express();

var corsOptions = {
  origin: "https://frontend-test3.herokuapp.com",
  methods: ["GET", "POST"],
  optionsSuccessStatus: 200,
};

/* sign in */
app.options("/signin", cors(corsOptions));
app.post("/signin", cors(corsOptions), (req, res) => {
  res.send("in 200");
});

app.get("/signin", (req, res) => {
  console.log("singin get");
  res.send("signin page");
});

/* sign up*/
app.options("/signup", cors(corsOptions));
app.post("/signup", cors(corsOptions), (req, res) => {
  console.log("singup post");
  res.send("up 200");
});

app.get("/signup", (req, res) => {
  console.log("singup get");
  res.send("signup page");
});

/* litsen on port process.env.PORT || 5000 */
app.listen(process.env.PORT || 5000);
