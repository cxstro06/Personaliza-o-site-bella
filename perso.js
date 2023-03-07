
function escreveu() {
    document.getElementsByClassName ('fontes-lista5').innerHTML = ''
    var nome = document.getElementById ('nome')
    nome = String (nome.value)
    var fonte1 = document.getElementById('fonte1')
    var fonte2 = document.getElementById('fonte2')
    document.getElementById ('nome-perso').innerHTML = nome

    if (fonte1.checked | fonte2.checked) {

    } else {
        alert ('selecione uma fonte')
        document.getElementById ('nome-perso').innerHTML = ''
    }

    if (fonte1.checked) {
        document.getElementById ('nome-perso').style.fontFamily = 'cursiva1'
    }

    else if (fonte2.checked) {
        document.getElementById ('nome-perso').style.fontFamily = 'cursiva2'
    }
}

function clicou() {
    if (fonte1.checked) {
        document.getElementById ('nome-perso').style.fontFamily = 'cursiva1'
    } else {
        document.getElementById ('nome-perso').style.fontFamily = 'cursiva2'
    }
}
