function Escreveu() {
    var select = document.getElementById('font-select').value
    var Nome = document.getElementById('nome')
    Nome = String (Nome.value)
    document.getElementById('nome-perso').innerHTML = Nome

    if (select == 'nada') {
        window.alert ('Por favor, escolha uma fonte.')
    }
}

function Escolheu() {

    var select = document.getElementById('font-select').value
    document.getElementById('nome-perso').style.fontFamily = 'cursiva1'
    if (select == 'font1') {
        
    } else if (select == 'font2') {
        document.getElementById('nome-perso').style.fontFamily = 'cursiva2'
    }
}