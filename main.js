let updateCardCallback;
window.onkeyup = function(e) {
	if (updateCardCallback) {
		updateCardCallback();
	}
}
window.onmouseup = function(e) {
	if (updateCardCallback) {
		updateCardCallback();
	}
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function showCard(root, german, slovak) {
	const row1 = document.createElement('div');
	row1.classList.add('row');
	const row2 = document.createElement('div');
	row2.classList.add('row');
	row2.append(slovak);

	const card = document.createElement('div');
	card.classList.add('card');
	card.append(row1);
	card.append(row2);

	root.append(card);

	return new Promise(resolve => {
		let cardShown = false;
		const callback = () => {
			if (!cardShown) {
				row1.append(german);
				cardShown = true;
			} else {
				updateCardCallback = null;
				resolve();
			}
		};
		updateCardCallback = callback;
	});
}

async function main() {
	const cardsList = document.querySelector('.cards-list');
	
	let currentIndex = 1;
	const totalCount = listOfWords.length;
	for (const word of shuffle(listOfWords)) {
		cardsList.innerHTML = `${currentIndex}/${totalCount}`;
		await showCard(cardsList, word.german, word.slovak);
		currentIndex += 1;
	}

	cardsList.innerHTML = 'Finished.';
}

main();