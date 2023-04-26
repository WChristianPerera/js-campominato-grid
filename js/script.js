// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


const btnPlay = document.querySelector('.btn');
const eleGrid = document.querySelector('.grid');
const level = document.querySelector('#lvl');

btnPlay.addEventListener('click', function() {
    eleGrid.classList.remove('hidden');

    const nCells = parseInt(level.value);
    switch (level.value) {
        case 'Easy':
            createGrid(100,eleGrid);
        case 'Hard':
            createGrid(81,eleGrid);
        case 'Crazy':
            createGrid(49,eleGrid);
            break;
    }
    eleGrid.style.setProperty('--sideSquare', Math.sqrt(nCells));

    createGrid(nCells,eleGrid);
})








function createGrid(nCells, eleContainer) {
	
eleContainer.innerHTML = '';

	for (let i = 1; i <= nCells; i++) {

		const eleCell = document.createElement('div');
		eleCell.innerHTML = i;
		eleCell.classList.add('cell');

		eleContainer.append(eleCell);

		eleCell.addEventListener('click', function() {
			this.classList.toggle('clicked');
		});
	}
}
















