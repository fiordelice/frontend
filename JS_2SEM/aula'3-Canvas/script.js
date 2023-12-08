//atribui a uma variável elemento selecionado
canvas = document.querySelector(`canvas`);

//definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//a variavel c se torna um objeto onde pode ser atribuido métetos
c = canvas.getContext(`2d`);

//atribuimos propriedades e métedos ao nosso
//objeto
//posições (X, Y, width, heigth)
c.fillStyle = "red";
c.fillRect(0,0,100,100);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(200,0,100,100)

//desenhando uma linha 

c.beginPath();
//posição inicio da linha
c.moveTo(50,540);
c.lineTo(700,50);
c.lineTo(500,300);
c.lineTo(700,300);
c.strokeStyle ="black";
c.stroke();
//Encerra o caminho
c.closePath();

//criando um circula
//posições para crinção
//(X,Y,raio,anguoInicial.)

c.beginPath()
c.arc(400,450,100,0, Math.PI * 2);
c.fillStyle = "rgba(0,0,255,0.5)";
c.stroke();
//cor interna
c.fill();
c.closePath();

//Criando um laço para criar vários circulos randomicos

for(var i = 0; i <10; i++)
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    c.beginPath();
    //Math.random * 100 deixa o tamanho aleatório
    c.arc(x, y, Math.random() * 100, 0, Math.PI *2);
    c.fillStyle = "rgba (0,0,255,0.5)";
    c.stroke();
    c.fill();
    c.closePath();
}