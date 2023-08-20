export interface Passenger {
    name: string;
    pets?: string[];
}

const passenger1: Passenger = {
    name: 'Jamecho',
}

const passenger2: Passenger = {
    name: 'Amparo',
    pets: ['Nairo','Tiche'],
}

const howManyPets = ( passenger: Passenger ): number => {

    // optional chaining is here, with ? (here, means: if exists, it could be undefined, 0 or some value)
    const petCount = passenger.pets?.length || 0;
    // the !, means that it is ensured that there will be pets
    // it is called, the not null assertion operator
    // const howManyPets = passenger.pets!.length;
    console.log(` ${passenger.name} has ${petCount} pets`);
    return petCount;
}

howManyPets( passenger1 );
howManyPets( passenger2 );