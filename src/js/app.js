import Character from "../js/class/Character.js";

class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('Пресонаж уже добавлен');
    } else this.members.add(obj);
  }

  addAll(...obj) {
    obj.forEach((elem) => {
      if (this.members.has(elem)) {
        throw new Error('Пресонаж уже добавлен');
      }
      else this.members.add(elem);
    });
  }

  toArray() {
    const arrTeam = Array.from(this.members);
    return arrTeam;
  }
}


class ErrorRepository {
  constructor() {
    this.errBase = new Map();
  }

  addErr(code, message) {
    this.errBase.add({key: code, value: message});
  }

  translate(code){
    this.errBase.forEach(elem => {
      if(code === elem.key) {
        return elem.value;
      }
      else console.log('Unknown error');
    });
  }

}

export default all;




