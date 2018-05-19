console.log('welcome to codekul')

let freq = 10

if (true) {
    let freq = 200
}

console.log(freq)

function calcFreq() {
    return freq * 2
}

() => freq * 7 // lambda representation or fat arrow 

console.log('Freq is ' + calcFreq())
console.log(`
    Line one
    Freq is ${calcFreq()}
    Line 3
`)
