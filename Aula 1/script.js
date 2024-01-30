const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const audioCapitulos = document.getElementById("audio-capitulo");
const nomeCap = document.getElementById("capitulo");


const numeroCapitulos = 10;
let taTocando = 0;
let capAtual = 1;

function tocarFaixa(){
    audioCapitulos.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    taTocando = 1;
}

function pausarFaixa(){
    audioCapitulos.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
    taTocando= 0;
}

function tocarouPausar(){

    if (taTocando === 0){
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

botaoPlayPause.addEventListener("click", tocarouPausar);

function trocarNome(){
    nomeCap.innerText = 'Capítulo ' + capAtual;
}

function avancarFaixa(){
    if(capAtual === numeroCapitulos){
        capAtual= 1;
    } else{
        capAtual = capAtual + 1;
    }
    audioCapitulos.src = "./books/dom-casmurro/" + capAtual + ".mp3";
    trocarNome();
    tocarFaixa();
}
botaoAvancar.addEventListener("click", avancarFaixa);

function voltarFaixa(){
    if(capAtual - 1 === 0){
        capAtual= 10;
    } else {
        capAtual = capAtual - 1;
    }
    audioCapitulos.src = "./books/dom-casmurro/" + capAtual + ".mp3";
    trocarNome();
    tocarFaixa();
}
botaoVoltar.addEventListener("click", voltarFaixa);
