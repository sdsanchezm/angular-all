
export function whatsMyType1 ( argument: any ){
    return argument;
}

// T is the first generic
export function whatsMyType2<T>(argument: T): T {
    return argument;
}

const amIString:string = whatsMyType2<string>("hallo welt");
const amINumber:number = whatsMyType2<number>(44);
const amIArray:number[] = whatsMyType2<number[]>([2,4,6,8,10]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );



