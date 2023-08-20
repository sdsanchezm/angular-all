

import { Product, taxCalculation4 } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: "Avant",
        price: 700
    },
    {
        description: "Nouk",
        price: 500
    }
];

// tax = 0.13
const [ total, tax ] = taxCalculation4({
    products: shoppingCart,
    tax: 0.13
 });


console.log("total: ", total);
console.log("tax: ", tax);
