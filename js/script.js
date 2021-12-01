
//post... square_class rimosso con style-inline
const container = document.querySelector('.container');

// container.appendChild(squares);
//acquisisco bottone azione play
let col;
const btn = document.getElementById('btn-play');
btn.addEventListener('click', function() {
    const select = document.querySelector('select');
    // console.log(select.value);
    switch(select.value) {
        case 'easy': 
            col = 7;
            row = 7;
            // aggiungi un quadrato col numero
            for (let i = 0; i < col*row; i++) {
                const square = document.createElement('div');
                square.classList.add('square-easy');
                square.append(i+1);
                container.appendChild(square);
            }
            console.log('easy');
            break;
            case 'medium': 
            col = 9;
            row = 9;
            // aggiungi un quadrato col numero
            for (let i = 0; i < col * row; i++) {
                const square = document.createElement('div');
                square.classList.add('square-medium');
                square.append(i + 1);
                container.appendChild(square);
            }
            console.log('medium');
            break;
            case 'hard': 
            col = 10;
            row = 10;
            // aggiungi un quadrato col numero
            for (let i = 0; i < col * row; i++) {
                const square = document.createElement('div');
                square.classList.add('square-hard');
                square.append(i + 1);
                container.appendChild(square);
            }
            console.log('hard');
            break;
        // default: console.log('impossibile visualizzare questo messaggio nel nostro caso');
    }
})