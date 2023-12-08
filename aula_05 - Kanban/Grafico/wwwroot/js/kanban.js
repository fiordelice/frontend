const colunas = document.querySelector(".column");

//variavel para armazenar o item atual arrastado
let ItemArrastado = null;

//Adicionadno um ouvinte ao evento "dragstar" a cada elemento com a classe "column"
colunas.forEach(item => {
    item.addEvetListener("dragstart", (e) => {
        //Define o item sendo arrastado
        ItemArrastado = e.target;

        //Adiciona a classe "dragging" ao item para destaca-lo visualmente
        ItemArrastado.classList.add("dragging");
    });


    //Adicionadno um ouvinte ao evento "dragend" para limpar o estado do arrasto
    item.addEvetListener("dragend", () => {
        ItemArrastado.classList.remove("dragging");

        ItemArrastado = null;
    });
});

//Adiciona um ouvinte ao evento "dragover" a cada elemento com a classe ""
colunas.forEach((item) =>
{
   item.addEvetListener("drogover", (e) =>{
    e.preventDefault();//previne o comportamento padrao do dragover
    //verifica se há um item sendo arrastado
    if(!ItemArrastado) return;

    const aplicarDepois = getNewPosition(item, e.clientY);

    //Insere o item arrastado após o de referencia ou inicio
    //da coluna 
    if(aplicarDepois){
        aplicarDepois.insertAdjacentElement("afterend", ItemArrastado);
    }
   })
});

//Função para calcular a nova posição item na coluna
function getNewPosition(column, posY){
    const cards = column.querySelector(".item:not(.dragging");
    let result;

    for(let refer_card of cards){
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.top + box.height /2;

        //verifica se a posição do mouse esta acima do centro de referencia
        if(posY >= boxCenterY) result = refer_card;
    }
     return result;
}8