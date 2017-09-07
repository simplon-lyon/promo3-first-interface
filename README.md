# First Interface
A project to learn about Interface using Typescript.

Doc: https://www.typescriptlang.org/docs/handbook/interfaces.html

## Example

Create a file `example.ts` with the following script:

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
// Ninja is a fighter and can assign to f.
let f :Fighter = n;

let k = new Knight();
// Knight is a fighter and can be assign to f. 
f = k;

let p = new Person();
// Person is not a fighter and Typescript will throw an error.
f = p;
```
