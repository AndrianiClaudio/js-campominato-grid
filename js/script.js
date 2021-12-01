function createGrid(difficulty) {
    const container = document.querySelector('.container');
    //rimuovo ogni possibile griglia precedente ... verranno cercati anche altri metodi
    container.querySelectorAll('*').forEach(i => i.remove());
    let row;
    let col;
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
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add(`square--${difficulty}`);
        // aggiungi un quadrato col numero
        square.append(i+1);
        container.appendChild(square);
        //azioni al click sul quadrato
        square.addEventListener('click', function() {
            this.classList.add('click');
        });
    }
}
//acquisisco bottone azione play
const btn = document.getElementById('btn-play');
btn.addEventListener('click', function() {
    const select = document.querySelector('select');
    //creo griglia a seconda delle dimenzioni
    switch(select.value) {
        default: createGrid(select.value);
    }
})