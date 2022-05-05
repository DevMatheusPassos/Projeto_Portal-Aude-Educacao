let $menu__link = document.querySelectorAll(".menu__link");
let elementoAtualAtivado;
let posicaoDoElementoAtual;

/* 
* Verificação do elemento que está com a classe de ativo para chamar a função e colocar a imagem de ativo
*/
$menu__link.forEach(function(element, i) {
    if(element.classList.contains("--selected")) {
        activeOption(i);
    }
})

function activeOption(n) {
    let img = $menu__link[n].querySelector("img");
    
    /* 
    * Verificação do elemento atual que está ativado para remover a imagem de ativo
    */
    if(elementoAtualAtivado) {
        var imgDoElementoAtual = elementoAtualAtivado.querySelector("img");
        elementoAtualAtivado.classList.remove("--selected");
        
        if(posicaoDoElementoAtual === 0 && posicaoDoElementoAtual !== n) {
            imgDoElementoAtual.setAttribute("src", "assets/images/header/nav-aprender.svg");
        }
        else if(posicaoDoElementoAtual === 1 && posicaoDoElementoAtual !== n) {
            imgDoElementoAtual.setAttribute("src", "assets/images/header/nav-escola.svg");
        }
        else if(posicaoDoElementoAtual === 2 && posicaoDoElementoAtual !== n) {
            imgDoElementoAtual.setAttribute("src", "assets/images/header/nav-diag360.svg");
        }
        else if(posicaoDoElementoAtual === 3 && posicaoDoElementoAtual !== n) {
            imgDoElementoAtual.setAttribute("src", "assets/images/header/nav-profile.svg");
        }
    }

    /* 
    * Adicionar imagem de ativado ao elemento quando for clicado
    */
    if(n === 0) {
        img.setAttribute("src", "assets/images/header/nav-aprender-active.svg");
    }
    else if(n === 1) {
        img.setAttribute("src", "assets/images/header/nav-escola-active.svg");
    }
    else if(n === 2) {
        img.setAttribute("src", "assets/images/header/nav-diag360-active.svg");
    }
    else if(n === 3) {
        img.setAttribute("src", "assets/images/header/nav-profile-active.svg");
    }

    $menu__link[n].classList.add("--selected");
    elementoAtualAtivado = $menu__link[n];
    posicaoDoElementoAtual = n;

}