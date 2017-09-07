
class Tree {
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

let trees: Tree[] = [];

trees.push(new Tree(2, "spruce", "dark green", 3));
trees.push(new Tree(3, "oak", "orange", 10));
trees.push(new Tree(5, "palm", "green", 5));

for (let t of trees) {
    t.render();
}