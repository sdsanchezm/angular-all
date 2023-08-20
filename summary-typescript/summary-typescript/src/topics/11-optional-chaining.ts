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

    // optional with ?
    const petCount = passenger.pets?.length || 0;
    // mandatory with !
    // const howManyPets = passenger.pets!.length;
    console.log(` ${passenger.name} has ${petCount} `);
    return petCount;
}

howManyPets( passenger1 );
howManyPets( passenger2 );