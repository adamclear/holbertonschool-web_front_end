function changeMode(size, weight, transform, background, color) {
	document.body.style.fontSize = size;
	document.body.style.fontWeight = weight;
	document.body.style.textTransform = transform;
	document.body.style.backgroundColor = background;
	document.body.style.color = color;
}

function main(changeMode) {
	globalThis.spooky = () => changeMode('9', 'bold', 'uppercase', 'pink', 'green');
  globalThis.darkMode = () => changeMode('12', 'bold', 'capitalize', 'black', 'white');
  globalThis.screamMode = () => changeMode('12', 'normal', 'lowercase', 'white', 'black');

	let paragraph = document.createElement('p');
	paragraph.innerHTML = "Change the mode of this webpage!";
	document.body.append(paragraph);

	let div1 = document.createElement('div');
	document.body.appendChild(div1);
	
	let spookyButton = document.createElement('button');
	spookyButton.innerHTML = "Spooky Mode";
	spookyButton.addEventListener('click', spooky);
	div1.appendChild(spookyButton);

	let darkButton = document.createElement('button');
	darkButton.innerHTML = "Dark Mode";
	darkButton.addEventListener('click', darkMode);
	div1.appendChild(darkButton);

	let screamButton = document.createElement('button');
	screamButton.innerHTML = "Scream Mode";
	screamButton.addEventListener('click', screamMode);
	div1.appendChild(screamButton);

	let paragraph2 = document.createElement('h1');
	paragraph2.innerHTML = "Here is some text to play with.";
	document.body.append(paragraph2);
}

main(changeMode);
