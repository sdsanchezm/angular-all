

function addNumbers1(n1: number, n2: number){
    return n1 + n2;
}

const addNumbers2 = (a: number, b: number) => {
    return a + b;
}

const addNumbers4 = (a: number, b: number):string => {
    return `${a + b}`;
}

function multiply1 (num1: number, num2?: number, base: number = 2){
    return base * num1;
}

const result1 : number = addNumbers1(21, 22);
const result2 : number = addNumbers2(41, 42);
const result4 : string = addNumbers4(5, 4);
const result3 : number = multiply1(10);

console.log({ result1, result2, result3, result4 });
console.log({ result2 });


// function with objects as arguments ===================================


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healChar = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const paco: Character = {
    name: "paco",
    hp: 50,
    showHp () {
        console.log(`life points: ${this.hp}`);
    }
}

console.log(paco.showHp());

healChar(paco, 10);
console.log(paco.showHp());



// exporting module here
export {};