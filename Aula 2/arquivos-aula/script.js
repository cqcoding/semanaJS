const azulInverno ={
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'

}

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'

}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const tituloProd = document.getElementById("titulo-produto");

const opCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opTam = ['41 mm', '45 mm'];

function attTam(){
    const opTamSelec = document.querySelector('[name = "opcao-tamanho"]: checked').id.charAt(0);
    alert(opTamSelec);
}

