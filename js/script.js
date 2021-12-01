function createGrid(difficulty) {
    const container = document.querySelector('.container');
    //rimuovo ogni possibile griglia precedente ... verranno cercati anche altri metodi
    container.querySelectorAll('*').forEach(i => i.remove());
    let row;
    let col;
    // attribuisci a row e col valori diversi a seconda della difficoltá
    switch(difficulty) {
        case 'easy':
            row = 7;
            col = 7;
            break;    
        case 'medium': 
            row = 9;
            col = 9;
            break;    
        case 'hard': 
            row = 10;
            col = 10;
            break;   
    }
    for (let i = 0; i < col*row; i++) {
        //creo il mio square
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add(`square--${difficulty}`);
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        // aggiungi un quadrato col numero
        square.append(i+1);
        //azioni al click sul quadrato
        square.addEventListener('click', function() {
            this.classList.add('click');
        });
        container.appendChild(square);
    }
}

function createDiv (mainClass) {
    const div = document.createElement('div');
    div.classList.add(mainClass);
    return div;
}
function createOption(value) {
    let option = document.createElement('option');
    option.value = value;
    return option;
}

const body = document.querySelector('body');
// creo header
const header = document.createElement ('header');
header.classList.add('header');
//header-left
const headerLeft = createDiv('header-left');
// logo
const logo = document.createElement('img');
let logo_src = 'img/logo-boolean.png';
logo.src=logo_src;
logo.alt = 'logo di Boolean';
logo.id = 'logo';
// titolo
const title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'Campo Minato: la Griglia';
headerLeft.append(logo,title);
//  header-right
const headerRight = createDiv('header-right');
// span
const span_header = document.createElement('span');
span_header.classList.add('difficulty');
span_header.innerHTML = 'Difficolt&aacute;: ';
// select
const select = document.createElement('select');
select.name = 'select-difficulty';
const optionEasy = createOption('easy');
optionEasy.innerHTML = 'easy';
// select.append(optionEasy);
const optionMedium = createOption('medium');
optionMedium.innerHTML = 'medium';
// select.append(optionMedium);
const optionHard = createOption('hard');
optionHard.innerHTML = 'hard';
select.append(optionEasy,optionMedium,optionHard);
// button
const button = document.createElement('button');
button.classList.add('btn-play');
button.innerHTML = 'Play';
headerRight.append(span_header,select,button);
header.append(headerLeft,headerRight);
//main
const main = document.createElement('main');
main.classList.add('main');
const container = createDiv('container');
main.append(container);
// footer
const footer = document.createElement('footer');
footer.classList.add('footer');
const copyright = createDiv('copyright');
footer.append(copyright);
const span_footer = document.createElement('span');
span_footer.classList.add('copyright');
span_footer.innerHTML = 'Made with <i class="fas fa-heart"></i> by <a href="#" class="subline-link">Boolean</a>';
copyright.append(span_footer);
body.prepend(header,main,footer);
//acquisisco bottone azione play
// const btn = document.getElementById('btn-play');
button.addEventListener('click', function() {
    const select = document.querySelector('select');
    //creo griglia a seconda delle dimenzioni
    switch(select.value) {
        default: createGrid(select.value);
    }
});