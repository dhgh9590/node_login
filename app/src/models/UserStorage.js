const fs = require("fs").promises;

class UserStorage {
  static #getUserIfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) {
      return users;
    }
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  //은닉화 된 데이터를 가지고 오기
  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./app/src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch((error) => {
        console.log(error);
      });
    // const users = this.#users;
  }

  static getUserInfo(id) {
    //json 파일 읽기
    return fs
      .readFile("./app/src/databases/users.json")
      .then((data) => {
        return this.#getUserIfo(data, id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    fs.writeFile("./app/src/databases/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage; //export
