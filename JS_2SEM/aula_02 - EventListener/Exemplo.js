//Selecionando botão pelo ID
const botao = document.querySelector('button');
const contadorElemento = document.querySelector('#contador');
var botao2 = document.querySelector('#diminuir');
var botao3 = document.querySelector('#zerar');


//Iniciando contador 
let contador = 0;

//função que sera chamada pelo eventListener 
function contando()
{
     contador++;
     contadorElemento.textContent = contador;
}

botao.addEventListener('click', contando);

function diminuir()
{
    if (contador <= 0) {
     alert("limite é 0")
     return 
    }
    
     contador--;
    contadorElemento.textContent = contador;
}
botao2.addEventListener('click', diminuir);


function zerar()
{
    contador = 0;
    contadorElemento.textContent = contador;
}
botao3.addEventListener('click', zerar);


