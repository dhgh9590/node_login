class UserStorage {
  //유저 정보
  static #users = {
    //#변수 선언을 하면 데이터 은닉이 됨
    id: ["woorimIT", "나개발", "김팀장"],
    pw: ["1234", "1234", "123456"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  //은닉화 된 데이터를 가지고 오기
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage; //export
