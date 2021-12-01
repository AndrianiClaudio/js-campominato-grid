function createGrid(difficulty) {
    const container = document.querySelector('.container');
    let row;
    let col;
    // aggiungi un quadrato col numero
    if(difficulty == 'easy') {
        row = 7;
        col = 7;
    } else if(difficulty == 'medium') {
        row = 9;
        col = 9;
    } else {
        row = 10;
        col = 10;
    }
    for (let i = 0; i < col*row; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add(`square--${difficulty}`);
        square.append(i+1);
        container.appendChild(square);
    }
}
// container.appendChild(squares);
//acquisisco bottone azione play
const btn = document.getElementById('btn-play');
btn.addEventListener('click', function() {
    const select = document.querySelector('select');
    // console.log(select.value);
    switch(select.value) {
        case 'easy': 
            createGrid('easy');
            console.log('easy');
            break;
            case 'medium': 
            createGrid('medium');
            console.log('medium');
            break;
            createGrid('hard');
            console.log('hard');
            case 'hard': 
            break;
        // default: console.log('impossibile visualizzare questo messaggio nel nostro caso');
    }
})