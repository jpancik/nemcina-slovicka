let updateCardCallback;
window.onkeyup = function(e) {
	if (updateCardCallback) {
		updateCardCallback(e);
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

	const forgotButton = document.createElement('button');
	forgotButton.append('Nevedel som');
	forgotButton.classList.add('forgot-button');

	root.append(card);

	return new Promise(resolve => {
		let translationShown = false;
		const callback = (e) => {
			if (!translationShown) {
				row1.append(german);
				translationShown = true;
				
				root.append(forgotButton);
				forgotButton.addEventListener('click', () => {
					updateCardCallback = null;
					resolve(false);	
				});
			} else {
				updateCardCallback = null;
				resolve(true);
			}
		};
		card.addEventListener('click', callback);
		updateCardCallback = callback;
	});
}

async function main() {
	const cardsList = document.querySelector('.cards-list');
	
	let currentWordsList = [];
	let nextWordsList = listOfWords;

	const url = window.location.href;
	const swap = url.indexOf('swap') !== -1;

	while (nextWordsList.length > 0) {
		currentWordsList = nextWordsList;
		nextWordsList = [];

		let currentIndex = 1;
		const totalCount = currentWordsList.length;
		for (const word of shuffle(currentWordsList)) {
			cardsList.innerHTML = `${currentIndex}/${totalCount} + ${nextWordsList.length} znova`;
			let remembers;
			if (swap) {
				remembers = await showCard(cardsList, word.slovak, word.german);
			} else {
				remembers = await showCard(cardsList, word.german, word.slovak)
			}
			if(!remembers) {
				nextWordsList.push(word);
			}
			currentIndex += 1;
		}
	}

	cardsList.innerHTML = 'Finished.';
}

main();