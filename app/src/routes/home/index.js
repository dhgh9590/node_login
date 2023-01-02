const express = require("express"); // express를 사용하기 위한 변수 저장
const router = express.Router(); //라우터를 사용할려면 express.Router을 변수 담아서 사용

router.get("/", (req, res) => {
  res.render("home/index"); //홈으로 접속시 화면에 보여줄 파일
});

module.exports = router; //router을 외부에서 사용할수 있게 하는 명령어
