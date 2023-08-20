

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
    constructor(public name: string, private address: string){}
}


const ironman1 = new Person1("", "");
console.log(ironman1);

const ironman2 = new Person2();
console.log(ironman2);

const ironman4 = new Person4("Marrana", "Sidney");
console.log(ironman4);



