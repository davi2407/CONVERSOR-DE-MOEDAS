// Taxas fixas de conversão
const taxas = {
    dolar: 5.17,
    euro: 5.91,
    libra: 6.90
};

const botao = document.getElementById("converter");

botao.addEventListener("click", function(){

    const valor = parseFloat(document.getElementById("valor").value);
    const moeda = document.getElementById("moeda").value;
    const resultado = document.getElementById("resultado");

    if(isNaN(valor) || valor <= 0){
        resultado.innerHTML = "Digite um valor válido.";
        return;
    }

    let convertido = valor / taxas[moeda];

    let simbolo = "";

    switch(moeda){
        case "dolar":
            simbolo = "US$";
            break;

        case "euro":
            simbolo = "€";
            break;

        case "libra":
            simbolo = "£";
            break;
    }

    resultado.innerHTML =
        `R$ ${valor.toFixed(2)} = <strong>${simbolo} ${convertido.toFixed(2)}</strong>`;
});