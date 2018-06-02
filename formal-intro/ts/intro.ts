import { CarMapper } from './../needed-ts/cars';

export abstract class Car implements CarMapper {

    private nm = 'android'
    GPS_TYPE = 'satellite'

    constructor(
        private age = 10
    ) {
        this.nm = 'android'
    }
    prntAg() {
        console.log(`Your age is ${this.age}`)
    }

    speedUp() {

    }

    blowHorn() {

    }

    geoFence() {

    }
}

// let byRm = 'android'

// var cr = new Car()

