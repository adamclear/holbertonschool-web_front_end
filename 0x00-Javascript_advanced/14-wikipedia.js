function createElement(data) {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = data;
	document.body.append(paragraph);
}

function queryWikipedia(callback) {
	let request = new XMLHttpRequest;
	request.open(
		'GET',
		'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*',
		true);
	request.send();
	request.onload = function () {
		json = JSON.parse(request.response);
		callback(json.query.pages[21721040].extract);
	}
}

queryWikipedia(createElement);
