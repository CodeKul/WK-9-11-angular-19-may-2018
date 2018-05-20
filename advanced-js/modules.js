// ES5
let spl = (function () {
    let st  = {
        nm : 'android',
        age : 7,
        symbol : function() {

        }
    }
    return st
})() // IIFE => Module

spl.symbol()
spl.nm = 'Android Things'

//ES6
class Car {
    speedUp() {
        this.pz = 56
        console.log(`Prize is ${this.pz}`)
    }

    constructor() {
        this.nm = 'BMW'
        this.col = 'RED'
        this.pz = 8
    }
}

let cr = new Car()
cr.speedUp()
cr.col = 'BLUE'
//cr.pz = 78
cr.nm = 'Apple'
console.log(`Name is ${cr.nm}`)

