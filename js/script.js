var dirBtn = document.getElementById('direita')
var esqBtn = document.getElementById('esquerda')
var sliOne = document.getElementById('on')
var sliTwo = document.getElementById('tw')
var slider = document.getElementById('slider')
var mFonts = document.getElementsByClassName('mFont')
var body = document.getElementById('body')
var backg = document.getElementsByClassName('backg')
var materiais = document.getElementById('materiais')
var ofertas = document.getElementById('ofertas')
var obrasdearte = document.getElementById('obrasdearte')
var tutoriais = document.getElementById('tutoriais')
var cont = 1
var scr = 0
var listaDeFontes = []

console.log(sliOne.style.left)
console.log(sliTwo.style.left)

dirBtn.addEventListener('click', () => {
    sliOne.style.left = '-100%'
    sliTwo.style.left = '0px'
    slider.style.overflowX = 'hidden'
    console.log(sliOne.style.left)
    console.log(sliTwo.style.left)
})

esqBtn.addEventListener('click', () => {
    sliOne.style.left = '0px'

    if (window.screen.width > 900) {
        sliTwo.style.left = '85%'
    }
    else {
        sliTwo.style.left = '95%'
    }
    slider.style.overflowX = 'hidden'
    console.log(sliOne.style.left)
    console.log(sliTwo.style.left)
})

// font-family: 'Dancing Script', cursive;
// font-family: 'Kanit', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Lobster', sans-serif;

function mudarFonte () {
    if (cont == 1) {
        for(var i = 0; i < mFonts.length; i++) {
            mFonts[i].style.fontFamily = "'Kanit', sans-serif"
            // mFonts[i].style.color = '#EF476F'
        }
    }
    else if (cont == 2) {
        for(var i = 0; i < mFonts.length; i++) {
            mFonts[i].style.fontFamily = "'Lato', sans-serif"
            // mFonts[i].style.color = '#06D6A0'
        }
    }
    else if (cont == 3) {
        for(var i = 0; i < mFonts.length; i++) {
            mFonts[i].style.fontFamily = "'Lobster', sans-serif"
            // mFonts[i].style.color = '#118AB2'
        }
        cont = 0
    }

    cont++
}

setInterval(() => {
    mudarFonte()
}, 1000)

function mudarCor (){
    let imgs = document.getElementsByClassName('imgs')
    scr = document.documentElement.scrollTop
    console.log(scr)

    if (scr > 6493) {
        tutoriais.style.backgroundColor = '#FFD166'
    }
    else if (scr > 3730) {
        obrasdearte.style.backgroundColor = '#073B4C'
        tutoriais.style.backgroundColor = '#ffffff'

        backg[2].style.backgroundImage = 'none'
        backg[3].style.backgroundImage = "url(img/amarelotitle.png)"
    }
    else if (scr > 2030) {
        ofertas.style.backgroundColor = '#06D6A0'

        obrasdearte.style.backgroundColor = '#ffffff'
        tutoriais.style.backgroundColor = '#ffffff'

        backg[1].style.backgroundImage = 'none'
        backg[2].style.backgroundImage = "url(img/azulescuro.png)"
        backg[3].style.backgroundImage = "url(img/amarelotitle.png)"

        for (let i = 0; i < imgs.length; i++){
            imgs[i].style.borderColor = '#EF476F'
        }

    }
    else if (scr > 596) {
        materiais.style.backgroundColor = '#EF476F'
        ofertas.style.backgroundColor = '#ffffff'
        obrasdearte.style.backgroundColor = '#ffffff'
        tutoriais.style.backgroundColor = '#ffffff'

        backg[0].style.backgroundImage = 'none'
        backg[1].style.backgroundImage = "url(img/verdeTitle-removebg-preview.png)"
        backg[2].style.backgroundImage = "url(img/azulescuro.png)"
        backg[3].style.backgroundImage = "url(img/amarelotitle)"

        let imgs = document.getElementsByClassName('imgs')

        for (let i = 0; i < imgs.length; i++){
            imgs[i].style.borderColor = '#ffffff'
        }

    }
    else {
        backg[0].style.backgroundImage = "url(img/titler-removebg-preview.png)"
        backg[1].style.backgroundImage = "url(img/verdeTitle-removebg-preview.png)"
        backg[2].style.backgroundImage = "url(img/azulescuro.png)"
        materiais.style.backgroundColor = '#ffffff'

        for (let i = 0; i < imgs.length; i++){
            imgs[i].style.borderColor = 'EF476F'
        }
    }
}

document.addEventListener('scroll', () => {
    mudarCor()
})