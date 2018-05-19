function counter() {
    var myDiv = document.getElementById('myDiv')
    var i = 0;
    setInterval(function(){
        myDiv.innerHTML = 'Counter ' + i++
    }, 1000)
    
    // for (var i = 0; i < 100; i++) {
    //     setTimeout(function () {
    //         myDiv.innerHTML = 'Counter ' + i
    //     }, 1500)
    // }
}
counter()