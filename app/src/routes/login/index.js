const express = require("express");
const router = express.Router();

const ctrl = require("./login.ctrl"); //login.ctrl 불러오기

//api 주소
router.get("/login", ctrl.output.login); //로그인
router.get("/register", ctrl.output.register); //회원가입
router.post("/login", ctrl.process.login);

module.exports = router; //router을 외부에서 사용할수 있게 하는 명령어
