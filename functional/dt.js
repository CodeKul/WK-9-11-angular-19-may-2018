let fnVr = () => true

function lp(typ) {
    //console.log(`Square of 10 is ${typ(10)}`)
   typ(() => 'Android')
}

// lp(fnVr)
// lp(
//     num => num * num
// )

 lp(
     anyFn => console.log(anyFn())
 )

function rtn() {
    return () => console.log(`Inner Function`)
}

let rtVal = rtn()
rtVal()


