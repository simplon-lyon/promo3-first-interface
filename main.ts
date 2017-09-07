interface RenderFunc {
    render();
}

class Tree implements RenderFunc {
    height: number;
    species: string;
    color: string;
    age: number;
    constructor(height: number, species: string, color: string, age: number) {
        this.height = height;
        this.species = species;
        this.color = color;
        this.age = age;
    }
    // render displays a tree emoji for spruce, oak, palm tree.
    render() {
        let emoji = this.species;
        if (this.species == "spruce") {
            emoji = "🌲";
        } else if (this.species == "oak") {
            emoji = "🌳";
        } else if (this.species == "palm") {
            emoji = "🌴";
        }
        console.log(emoji + " " + this.height + " meters " + this.color);
    }
}

// Create an Animal class with a render method
// wich display the emoji associated with the species.
class Animal {
    species: string;
    age: number;
    hasFur: boolean;
    constructor(species: string, age: number) {
        this.species = species;
        this.age = age;
    }
    render() {
        let emoji = this.species;
        if (emoji === "goat") {
            emoji = "🐐";
        } else if (emoji == "leopard") {
            emoji = "🐆";
        }
        console.log(emoji + " " + this.age + " year old");
    }
}

let objects: RenderFunc[] = [];

objects.push(new Tree(2, "spruce", "dark green", 3));
objects.push(new Tree(3, "oak", "orange", 10));
objects.push(new Tree(5, "palm", "green", 5));

objects.push(new Animal("goat", 2));
objects.push(new Animal("goat", 3));
objects.push(new Animal("leopard", 1));

for (let o of objects) {
    o.render();
}