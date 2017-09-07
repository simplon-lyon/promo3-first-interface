# First Interface
A project to learn about Interface using Typescript.

## Example

```typescript
// Declare a Fighter interface. Any object with the methods:
// attack, defend and heal is a Fighter.
interface Fighter {
    attack(:Fighter)
    defend(:Fighter)
    heal(:Fighter)
}

// Declare a Ninja class wich implicitly implement Fighter. 
class Ninja {
    attack(f :Fighter) {}
    defend(f :Fighter) {}
    heal(f :Fighter) {}
    throw() {}
    jump() {}
}

// Declare a Knight class which explicitl implement Fighter.
class Knight implements Fighter {
    attack(f :Fighter) {}
    defend(f :Fighter) {}
    heal(f :Fighter) {}
}

// Declare a Personne class which is not a Fighter.
class Personne {
    eat() {}
}

let n = new Ninja();
let k = new Knight();

let f :Fighter = n;
f = k;
```
