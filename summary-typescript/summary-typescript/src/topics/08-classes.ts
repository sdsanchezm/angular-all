

// suggested way - shortest way
export class Person1 {
    constructor(
        public name: string,
        private address: string = 'No set'
    ){}
}

export class Person2 {
    public name: string;
    private address?: string;

    constructor() {
        this.name = "Jamecho";
        this.address = "Berlin";
    }
}

// unusual way 
export class Person3 {

    public name: string;
    private address: string;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
}

// suggested way
export class Person4 {
    constructor(public name: string, private address: string = "not set..."){}
}

// suggested way
export class Person5 {
    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = "not set..."
        ){}
}

// inheritance
// no problem with 1 level, the issue is when the number of extensions is high, it becoms complex to manage
// is better composition over inheritance
export class Hero1 extends Person4 {
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super( realName, 'Papua');
    }
}

// Composition is the best alternative
export class Hero2 {
    // public person: Person4;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person4,
    ){
        // this.person = new Person4(realName);
    }
}

// Composition is the best alternative
export class Hero3 {
    // public person: Person4;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person5,
    ){
        // this.person = new Person4(realName);
    }
}


const ironman1 = new Person1("", "");
console.log(ironman1);

const ironman2 = new Person2();
console.log(ironman2);

const ironman4 = new Person4("Marrana", "Sidney");
console.log(ironman4);

const hero1 = new Hero1("Ironman", 55, "Bart");
console.log(hero1);

// first version with composition
const person1 = new Person4("Tony Stark", "Saskatoon");
const batman1 = new Hero2("Batman", 21, "Bruce", person1);
console.log(batman1);

// second version, making change only to person (testing composition)
// in this case inheritance was avoided and composition was used instead
const person2 = new Person5("Bruce", "Wayne", "Saskatoon");
const batman2 = new Hero3("Batman", 23, "Bruce", person2);
console.log(batman2);






