
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'This is NewProperty';
        hello = 'override';
    }
}

// this syntax requires ""experimentalDecorators": true" in .tsconfig.json
// this decorator, is "inserting" 2 new properties to this class
@classDecorator
export class SuperClass {
    public myProperty: string = 'qwe123';
    print() {
        console.log('Hallo Welt')
    }
}

// printing the class here, not the isntance
console.log( SuperClass );
// creating the instances
const myClass = new SuperClass();
// printing the instances here
console.log( myClass );