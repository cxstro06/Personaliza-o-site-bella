function Close() {
    let ClientName = document.getElementById ('ClientName').value
    let FamilyName = document.getElementById('FamilyName').value
    if (ClientName.length == 0||FamilyName.length == 0) {
    alert('Preencha todos os campos!')
    } else {
        document.getElementById('span').style.display = 'none'

        return ClientInfo =  ` ${ClientName} ${FamilyName}`
    }
}

function Fonts() {
    let fontValue = document.getElementById('Fonts').value

    if (fontValue == 'font1') {
        document.getElementById('Fonts').style.fontFamily = 'Courier New'
        document.getElementById('textName').style.fontFamily = 'Courier New'
         return infoFont = 'Courier New'
    } if (fontValue == 'font2') {
        document.getElementById('Fonts').style.fontFamily = 'cursiva1'
        document.getElementById('textName').style.fontFamily = 'cursiva1'
        return infoFont = 'cursiva1'
    } if (fontValue == 'font3') {
        document.getElementById('Fonts').style.fontFamily = 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
        document.getElementById('textName').style.fontFamily = 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
        return infoFont = 'Gill Sans'
    } if (fontValue == 'font4') {
        document.getElementById('Fonts').style.fontFamily ='Verdana'
        document.getElementById('textName').style.fontFamily ='Verdana'
        return infoFont = 'Verdana'
    } if (fontValue == 'font5') {
        document.getElementById('Fonts').style.fontFamily ='Cursiva2'
        document.getElementById('textName').style.fontFamily ='Cursiva2'
        return infoFont = 'Cursiva2'
    }
}

function color(color) {
    document.getElementById ('textName').style.color = color

    return infoColor = color
}

function Writing() {
    let Name = document.getElementById ('NameText')
    Name = String (Name.value)
    
    document.getElementById ('textName').innerHTML = Name
}

function Buy() {
    let infoName = document.getElementById ('textName').innerHTML
    window.alert (`Usuario: ${ClientInfo}
Nome: ${infoName}
Font: ${infoFont}
Cor: ${infoColor}`)
}
let ClientInfo = ''
let infoFont = ''
let infoColor = ''
