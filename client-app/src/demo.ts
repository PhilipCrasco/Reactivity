export interface Duck{

    name: string;
    numLegs: number;
    addedBy: string,
    makeSound: (sound: string) => void;
}

const duck1: Duck = {

    name:'huey',
    numLegs:2,
    addedBy: 'borris',
    makeSound: (sound: string) => console.log(sound)

}

const duck2: Duck = {

    name:'duey',
    numLegs:2,
    addedBy: 'borris',
    makeSound: (sound: string) => console.log(sound)

}





duck1.makeSound('quack');
duck2.makeSound('sound');

export const ducks = [duck1 , duck2]