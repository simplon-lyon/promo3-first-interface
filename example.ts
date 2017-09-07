interface Fighter {
    attack(Fighter);
    defend(Fighter);
    heal(Fighter);
}

class Ninja {
    attack(f: Fighter) {}
    defend(f: Fighter) {}
    heal(f: Fighter) {}
    throw(f: Fighter) {}
    jump() {}
}

class Person {
    eat() {}
    move() {}
    attack(f: Fighter) {}
    defend(f: Fighter) {}
    heal(f: Fighter) {}
}

let n = new Ninja();
let p = new Person();
let f: Fighter = p;