var marginLeft = 100;
var marginTop = 400;

$("#campo").keydown(evento => {
    if (evento.which == 37) {
        //vai pra esquerda
        marginLeft -= 40;
        $("#cachorro").css("margin-left", marginLeft);
        validaPosicao(marginTop, marginLeft);
    }

    if (evento.which == 38) {
        //Vai pra cima
        marginTop -= 40;
        $("#cachorro").css("margin-top", marginTop);
        validaPosicao(marginTop, marginLeft);
    }

    if (evento.which == 39) {
        //Vai pra direita
        marginLeft += 40;
        $("#cachorro").css("margin-left", marginLeft);
        validaPosicao(marginTop, marginLeft);
    }

    if (evento.which == 40) {
        //Vai pra baixo
        marginTop += 40;
        $("#cachorro").css("margin-top", marginTop);
        validaPosicao(marginTop, marginLeft);
    }
})

function validaPosicao(top, left) {
    if (top == 240 && left == 900) {
        alert("Você chegou até a casa!");
        marginLeft = 100;
        marginTop = 400;
        $("#cachorro").css("margin-left", marginLeft);
        $("#cachorro").css("margin-top", marginTop);
    }
}