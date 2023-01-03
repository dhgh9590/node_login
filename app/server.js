const express = require("express"); //express import
const path = require("path");
const app = express();
app.use(express.json()); //ajax요청에 필요한 코드
var cors = require("cors"); //cors에 필요한 코드
app.use(cors()); //cors에 필요한 코드
const bodyParser = require("body-parser"); //form 데이터를 받기위해 필요한 코드
app.use(bodyParser.urlencoded({ extended: true })); //form 데이터를 받기위해 필요한 코드

//라우팅
const home = require("./src/routes/home"); //routes의 home파일의 루트 경로
const login = require("./src/routes/login");

//앱 세팅
app.set("views", "./app/src/views"); //views로 경로 설정
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); //js파일 정적경로 설정

//routes 세팅 / use는 미들 웨어를 등록해주는 메서드
app.use("/", home);
app.use("/", login);

module.exports = app;
