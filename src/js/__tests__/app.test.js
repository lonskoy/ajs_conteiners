import Team from "../app";
import Character from "../class/Character";

test("Test App_add", () => {
  const hero1 = new Character("Ivan", "Bowman");
  const team = new Team();
  team.add(hero1);
  const result = 
  {
    name: "Ivan",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };

  expect(team[0]).toEqual(result);
});

// const hero1 = new Character("Ivan", "Bowman");
//     const hero2 = new Character("Oleg", "Daemon");
//     const hero3 = new Character("Pavel", "Zombie");

//     team.addAll(hero2, hero3);
//     team.toArray();
