function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
        msg.innerHTML = `Agora são ${hora} horas.`
        if (hora >= 0 && hora <= 4) {
            img.src = "image/noite.png"
            document.body.style.background = '#0F2426'
            // NOITE  
        } else if (hora >= 5 && hora <= 12) {
            // MANHÃ
            img.src = "image/manha.png"
            document.body.style.background = '#F28627'
        } else if (hora >= 13 && hora <= 18) {
            // TARDE
            img.src = "image/tarde.png"
            document.body.style.background = '#E79B69'
        } else {
            // NOITE
            img.src = "image/noite.png"
            document.body.style.background = '#0F2426'
        }
}


