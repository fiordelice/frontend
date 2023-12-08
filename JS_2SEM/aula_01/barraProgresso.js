function animarBarraProgresso() {
    //Declarando as variáveis e atribuindo os valores através dos elementos da DOM
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://m.media-amazon.com/images/M/MV5BZDgwZDkxMDctNDMxZC00MjRmLTk5MjQtOGUwMTg5ODA5MzI3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_.jpg")`
        }
        else {
            progresso+= 10;
            barra.css("width", progresso + "%");
        }
    }, 150);
}