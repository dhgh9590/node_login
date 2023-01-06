const express = require("express");
const router = express.Router();

const ctrl = require("./join.ctrl");

//api 주소
router.get("/join", ctrl.output.join); //회원가입
router.post("/join", ctrl.process.join);

module.exports = router; //router을 외부에서 사용할수 있게 하는 명령어
