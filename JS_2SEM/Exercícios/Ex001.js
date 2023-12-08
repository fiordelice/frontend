function enviar() {
    var nome = document.querySelector("#inputNome").value;
    var idade = parseInt(document.querySelector("#inputIdade").value);
    var cidade = document.querySelector("#inputCidade").value;

    var validaCampos = validar(nome, idade, cidade);
    if (validaCampos == true) {
        return;
    }

    mostrarBarra(nome, idade, cidade)
}
function validar(nome, idade, cidade) {
    if (nome == "" || idade == "" || cidade == "") {
        document.querySelector("#resultado").innerHTML = ` 
        <div class="alert alert-primary fade show">
        <button type="button" class="close accordion-button " data-bs-dismiss="alert">
            <div class="w-100 d-flex justify-content-between">
                <label>Preencha todos os campos</label>
                <span>&times;</span>
            </div>`;
        return true;
    }
    else {
        return validarIdade(idade);
       
    }
}
function validarIdade(idade) {
    if (idade < 0 || idade > 150) {
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-danger fade show">
                <span>Idade invalida</span>
                <button type="button" class="close" data-bs-dismiss="alert">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`;
        return true;
    }
    else {
        return false;
    }
}
function mostrarBarra(nome, idade, cidade) {
    var progress = 0;
    var barra = document.querySelector(".progress-bar");
    var intervalo = setInterval(function () {
        if (progress >= 100) {
            clearInterval(intervalo);
            barra.style.display = "none";


            document.querySelector("#resultado").innerHTML = `
            <div class="alert alert-success fade show">
                    <span>${nome} ${idade} ${cidade}</span>
                    <button type="button" class="close" data-bs-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>`;
        }
        else {
            progress++;
            barra.style.width = progress + "%";
        }
    }, 50);
}
