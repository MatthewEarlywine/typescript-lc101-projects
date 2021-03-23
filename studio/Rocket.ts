import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';

export class Rocket{
    name:string;
    totalCapacityKg:number;
    massKg:number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    };

    sumMass (items:Payload[]):number {
        let payloadMass:number = 0;
        for (let i=0; i < items.length; i++){
            payloadMass += items[i].massKg;
        };
        return payloadMass;
    };
    currentMassKg(): number {
        let mass:number = 0;
        mass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return mass;
    };
    canAdd(item:Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        };
        return false;
    };
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        };
        return false;
    };
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        };
        return false;
    };
};

