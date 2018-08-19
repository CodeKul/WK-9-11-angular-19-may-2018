let arr = [
    'Android', 'iOS', 'Rim', 'Tango', 'Palm'
]

for (let i = 0; i < arr.length; i++) {
    console.log(`Index is ${i} and arr element is ${arr[i]}`)
}

arr.forEach(function (el, ind) {
    console.log(`Element is ${el} and Index is ${ind}`)
})

arr.forEach((el, ind) => console.log(`Element is ${el} and Index is ${ind}`))

