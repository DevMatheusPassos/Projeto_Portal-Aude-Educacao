let $menu__link = document.querySelectorAll(".menu__link");
console.log($menu__link);

$menu__link.forEach(function(element) {
    if(element.classList.contains("--selected")) {
        element.querySelector("img").setAttribute("src", "assets/images/header/nav-aprender-active.svg")
    }
})
for(var i = 0; i < $menu__link.length; i++) {
    console.log($menu__link[i]);
}

let elementoAtualAtivado;

function activeOption(n) {
    let img = $menu__link[n].querySelector("img");

    if(n === 0) {
        img.setAttribute("src", "assets/images/header/nav-aprender-active.svg")
        elementoAtualAtivado = $menu__link[0];
    }
    else if(n === 1) {
        img.setAttribute("src", "assets/images/header/")
        elementoAtualAtivado = $menu__link[0];
    }
}