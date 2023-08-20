

// this is not ideal
//let skills: string[] = ["Bash", "Counter", "Healing", true, 123];

// thjis is desirable
let skills: string[] = ["Bash", "Counter", "Healing"];


// cannot define and specificate types in this object literal, and that is why we use interfaces
const jamecho1 = {
    name: "jamecho",
    hp: 100,
    skills: ["bash", "counter", "healing"]
}

// this is the interface created, with types in it
interface ICharacter {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const jamecho2: ICharacter = {
    name: "jamecho",
    hp: 100,
    skills: ["bash", "counter", "healing"]
}

jamecho2.hometown = "Berlin";

console.table(jamecho2);


// this is to transform the file in a module
export {}