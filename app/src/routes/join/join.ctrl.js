const User = require("../../models/User"); //import

//랜더링
const output = {
  join: (req, res) => {
    res.render("join/index");
  },
};

//로그인 값 받기
const process = {
  join: async (req, res) => {
    const user = new User(req.body);
    const response = await user.join();
    return res.json(response);
  },
};

module.exports = {
  process,
  output,
};
