const express = require("express");
const router = express.Router();

const ctrl = require("./login.ctrl"); //login.ctrl 불러오기

router.get("/login", ctrl.login); //ctrl안의 login 불러오기

module.exports = router; //router을 외부에서 사용할수 있게 하는 명령어
