const canvas = document.querySelector("#pintarCanvas");
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d');

//variavel que armazenara a cor
const corEscolhida = document.querySelector("#corEscolhida");
const botao = document.querySelector('#limpar');
let pintado = false;

//define a variavel como true indicando que o usuario começou a desenhar
canvas.addEventListener('mousedown', () => {
    pintando = true;
})

//define a variavel como false indicando que o usuario soltou o click
canvas.addEventListener('mouseup',() => {
    pintando = false;
    context.beginPath(); //começa uma nova trajetória.
})

//a ação é iniciada assim que o mouse se move,
//desde que o mousedown continue pressionado
canvas.addEventListener('mousemove', desenhar);

//seleciona a cor a ser utilizada
corEscolhida.addEventListener('input', atualizarCor);

//chamamos a função desenhar e passamos o event como parametro.
//O event é um objeto que contem atributos que são acionados de acordo
//com o evento ocorrido.

function desenhar(event)
{
    if(!pintando == false) return;
    //retorna a posição do elemento na tela
    const {clientX, clientY} = event;
    //obtem as coordenadas do canto esquerdo do topo
    const {left, top} = canvas.getBoundingClientRect();

    //subtrai as coordenadas do canvas nos dando a relatividade
    //com o canvas
    
    const x = clientX - left;
    const y = clientY - top;
    
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
}

function atualizarCor(event){
    context.strokeStyle = event.target.value;
}

function limpar()
{
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();
}

botao.addEventListener('click', limpar);