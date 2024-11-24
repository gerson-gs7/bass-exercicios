
const btns = document.querySelectorAll('.btn');
const primaria = document.querySelectorAll('.primaria');
const secundaria = document.querySelectorAll('.secundaria');
const p = document.querySelectorAll('p');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');

const btn_tema_claro = document.querySelector('.btn_tema_claro');
const btn_tema_escuro = document.querySelector('.btn_tema_escuro');

mudaTema('escuro');

btn_tema_escuro.addEventListener('click', () => {

    mudaTema('escuro');

})
btn_tema_claro.addEventListener('click', () => {

    mudaTema('claro');
})

function mudaTema(tema){
    if(tema=='escuro'){
        primaria.forEach(function (tema) {
            tema.classList.remove('cor-primaria-claro');
            tema.classList.add('cor-primaria-escuro');
        });
        secundaria.forEach(function (tema) {
            tema.classList.remove('cor-secundaria-claro');
            tema.classList.add('cor-secundaria-escuro');
        });
        btns.forEach(function (tema) {
            tema.classList.remove('btn-warning');
            tema.classList.add('btn-info');
        });
        h2.forEach(function(tema){
            tema.classList.add('text-white');
        });
        h3.forEach(function(tema){
            tema.classList.add('text-white');
        });
        p.forEach(function(tema){
            tema.classList.add('text-white');
        });
    }else if(tema=='claro'){
        primaria.forEach(function (tema) {
            tema.classList.remove('cor-primaria-escuro');
            tema.classList.add('cor-primaria-claro');
        });
        secundaria.forEach(function (tema) {
            tema.classList.remove('cor-secundaria-escuro');
            tema.classList.add('cor-secundaria-claro');
        });
        btns.forEach(function (tema) {
            tema.classList.remove('btn-info');
            tema.classList.add('btn-warning');
        });
        h2.forEach(function(tema){
            tema.classList.remove('text-white');
        });
        h3.forEach(function(tema){
            tema.classList.remove('text-white');
        });
        p.forEach(function(tema){
            tema.classList.remove('text-white');
        });
    }
}

