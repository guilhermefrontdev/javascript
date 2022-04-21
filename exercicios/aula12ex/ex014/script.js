function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'imagens/imgmanha.png'
    document.body.style.backgroundColor = '#D2E627'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'imagens/imgtarde.png'
    document.body.style.backgroundColor = '#D27627'
} else {
    // BOA NOITE!
    img.src = 'imagens/imgnoite.png'
    document.body.style.backgroundColor = '#004457'
}

}