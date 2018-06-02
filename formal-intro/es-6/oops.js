class Animal {

    constructor() {
        this.legs = 4
        this.nose = 1
    }

    walk() {
        this.legs++
    }
}

let an = new Animal()
an.legs = 4
an.no = 1
an.walk()

let engine = (function(){

})() // IIFE - 