let span = document.querySelector ('span')
let button = document.getElementById ('verificar')

button.addEventListener ('click', function() {
    let ghost = Number (document.getElementById ('sticker1').value)
    let atom = Number (document.getElementById ('sticker2').value)
    let mario = Number (document.getElementById ('sticker3').value)
    let suma = ghost + atom + mario

if (suma > 0 && suma <= 10) {
    span.innerHTML = 'Llevas ' + suma + ' stickers'
}
else if (suma == 0) {
    span.innerHTML = 'No llevas stickers'
}
else if (suma < 0) {
    span.innerHTML = ''
    alert ('No se pueden llevar cantidades negativas')
}
else {
    span.innerHTML ='Llevas demasiados stickers'
}

})