import { Interface } from "readline";

let data = 42;

data = 10;

export interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'Mers',
}

const car2: ICar = {
    color: 'red',
    model: 'BMW',
    topSpeed: 120
}

const multiply = (x:number, y:number): number => {
    return x*y;
}

export const cars = [car1, car2];