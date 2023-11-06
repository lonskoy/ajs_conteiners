import Character from "../js/class/Character.js";

class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {                            
    if (this.members.has(obj)) {          // По чему проверка не рабоатет?
      new Error("Персонаж уже добавлен");
    } else this.members.add(obj);
  }

  addAll([...obj]) {
    this.members.add(obj);
  }

  toArray() {
    const array = Array.toArray(this.members);
    return array;
  }
}

const hero1 = new Character("Ivan", "Bowman");
const hero2 = new Character("Oleg", "Daemon");
const hero3 = new Character("Pavel", "Zombie");

const team = new Team();
team.addAll([hero1, hero2, hero3]);

console.log(team);



