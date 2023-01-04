const User = require("../../models/User"); //import

//랜더링
const output = {
  login: (req, res) => {
    res.render("login/index");
  },
  register: (req, res) => {
    res.render("join/index");
  },
};

//로그인 값 받기
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
