function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', '/img/bebemenino.png')
            }else if(idade < 21){
                img.setAttribute('src', '/img/homem-jovem.png')
            } else if(idade < 50){
                img.setAttribute('src', '/img/homem-adulto.png')//não ta pegando
            }else {
                img.setAttribute('src', '/img/homemidoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', '/img/crianca-menina.png')
            }else if(idade < 21){
                img.setAttribute('src', '/img/mulher-jovem.png')
            } else if(idade < 50){
                img.setAttribute('src', '/img/mulheradulta.png')
            }else {
                img.setAttribute('src', '/img/mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}