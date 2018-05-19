console.log(document)
// var ipAn = document.getElementById('ipAn')
// ipAn.onkeyup = function() {
//     var dvEmp = document.getElementById('dvEmp')
//     dvEmp.innerHTML = ipAn.value
// }

function rplct() {
    var ipAn = document.getElementById('ipAn')
    var dvEmp = document.getElementById('dvEmp')
    dvEmp.innerHTML = ipAn.value
}

function rplctV1(txt, dvEmp) {
    dvEmp.innerHTML = txt
}