

export interface Product {
    description: string;
    price: number;
}


const phone1: Product = {
    description: "Algo 1",
    price: 90.1
}

const phone2: Product = {
    description: "",
    price: 0
}



interface TaxCalcualtionOptions {
    tax: number;
    products: Product[];
}

// 3 ways to do it:
// fist one: 
function taxCalculation1( options: TaxCalcualtionOptions ):number[] {
    let total = 0;
    options.products.forEach( product => {
        total += product.price;
    })
    return [total, total * options.tax];
}

// second one: 
function taxCalculation2( options: TaxCalcualtionOptions ):number[] {
    let total = 0;
    options.products.forEach( ({ price }) => {
        total += price;
    })
    return [total, total * options.tax];
}


// third one: 
function taxCalculation3( {tax, products}: TaxCalcualtionOptions ):[number, number] {
    let total = 0;
    products.forEach( ({ price }) => {
        total += price;
    })
    return [total, total * tax];
}

// fourth one: 
export function taxCalculation4( options: TaxCalcualtionOptions ):[number, number] {

    const { tax, products } = options;

    let total = 0;
    products.forEach( ({price}) => {
        total += price;
    })
    return [total, total * tax];
}


const shoppingCart = [phone1, phone2];
const tax = 0.15;

// w/o destructure
const result1 = taxCalculation1({
    products: shoppingCart,
    tax
})

// destructuring the array
const [total2, tax2] = taxCalculation1({
    products: shoppingCart,
    tax
});

console.log("Total: " + result1[0]);
console.log("Tax: " + result1[1]);

console.log("Total2: " + total2);
console.log("Tax2: " + tax2);

// clean code indicates that a max of 3 arguments in a function or it should be transform into an object


