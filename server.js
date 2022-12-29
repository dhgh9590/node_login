const express = require("express"); //express import
const path = require("path");
const app = express();
app.use(express.json()); //ajax요청에 필요한 코드
var cors = require("cors"); //cors에 필요한 코드
app.use(cors()); //cors에 필요한 코드
const bodyParser = require("body-parser"); //form 데이터를 받기위해 필요한 코드
app.use(bodyParser.urlencoded({ extended: true })); //form 데이터를 받기위해 필요한 코드

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/", (req, res) => {
  res.send("메인 화면");
});

app.get("/login", (req, res) => {
  res.send("로그인 화면");
});
