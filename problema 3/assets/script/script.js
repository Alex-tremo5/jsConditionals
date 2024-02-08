
let boton = document.getElementById ('ingresar')
let span = document.querySelector ('span')
// let pag = document.getElementById ('pagsig')

boton.addEventListener ('click', function() {
let primero = document.getElementById ('numero1').value
let segundo = document.getElementById ('numero2').value
let tercero = document.getElementById ('numero3').value

if (primero == 9 && segundo == 1 && tercero == 1) {
    span.innerHTML = 'First password correct'   
} else if (primero == 7 && segundo == 1 && tercero == 4) {
    span.innerHTML = 'Second password correct'
} else {
    span.innerHTML = 'Invalid password'
}
})

// pag.addEventListener ('click', function(){
//     window.location.href = 'index1.html'
// }
// )