const nota1 = document.getElementById('nota1'); //Dentro de cada constante recebo o valor dos inputs preenchidos ou não
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const nota5 = document.getElementById('nota5');
let notas = [nota1, nota2, nota3, nota4, nota5]; // Armazena o dado de todas as notas dentro de um array
let totalaserdividido = notas.length; // Pega o array da lista e fala a quantidade de elementos

notas.forEach((campo) => {
    campo.addEventListener('input', function () {
        if (parseFloat(campo.value) > 1000) {
            message('O valor não pode ser maior que 1000','#FF0000','none','#000000');
            campo.value = 1000; 
        }
    });
});

function MediaGeral(notas, totalaserdividido) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += parseFloat(notas[i].value) || 0; // Converte o valor do input para número e soma , || significa concatenação
    }
    return soma / totalaserdividido;
}
document.getElementById('calcular').addEventListener('click', function () {
    const media = MediaGeral(notas, totalaserdividido);
    if (isNaN(media) || media === 0) { // O isNaN signfica que se o valor passado não for um numero ele não funcionara!, ou seja um boolean
            message('Preencha os campos com suas notas!','#5a0003','none','#ffffff') // Verifica se o valor passado é estritamente igual a 0
    } else {
        message('A sua média do Enem é de: ' + media , '#556B2F','none','#ffffff')
    }
});
function message(text, background,boxShadow,color) {
    Toastify({
        text: text,
        duration: 2000,
        style: {
            background: background,
            boxShadow: boxShadow,
            color: color
        }
    }).showToast();}