const container = document.querySelector('.container');

//iniziamo con una struttura 7*7.. di default la difficolta é easy
let col = 7;
let row = 7;
let dim = col * row;
for(let i = 0; i<dim; i++) {
    // aggiungi un quadrato col numero
    const square = document.createElement('div');
    square.classList.add('square-easy');
    square.append(i+1);
    container.appendChild(square);
}

//acquisisco bottone azione play
const btn = document.getElementById('btn-play');
btn.addEventListener('click', function() {
    const select = document.querySelector('select');
    console.log(select.value);
})