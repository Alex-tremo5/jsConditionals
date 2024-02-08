let img = document.getElementById ('neji')
// let pag = document.getElementById ('pagsig')

img.addEventListener ('click', function(){
    let border = img.style.border
    if (border === '0px') {
        img.style.border = '7px solid greenyellow'
        img.style.boxShadow = '20px 20px 20px #b4f58e'
    } 
    else {
        img.style.border = '0px'
        img.style.boxShadow = '0px 0px'
    }
})

// pag.addEventListener ('click', function(){
//     window.location.href = 'index2.html'
// })