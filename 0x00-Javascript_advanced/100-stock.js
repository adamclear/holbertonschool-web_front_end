let stock = {
	macbook: 2,
	iphone: 4
}

function processPayment (itemName) {
	let newStockAmt = stock[itemName];
	newStockAmt += -1;
	stock[itemName] = newStockAmt;
	console.log(`Payment is being processeed for item ${itemName}`);
}

function processError (itemName) {
	console.log(`No more ${itemName} in stock.`);
	console.log('Payment is not being processed.')
}

function processOrder (itemName, callbackPayment, callbackError) {
	itemName = itemName.toString().toLowerCase();
	if (itemName === 'macbook' || itemName === 'iphone') {
		console.log(`Verifying the stock of ${itemName}.`);
		let stockAvail = stock[itemName];
		if (stockAvail > 0) {
			callbackPayment(itemName);
			displayPrompt();
		} else {
			callbackError(itemName);
			displayPrompt();
		}
	} else {
		console.log(`${itemName} is not on offer, please select another option.`)
		displayPrompt();
	}
}

function displayPrompt() {
	let item = prompt('Please enter the item you would like to purchase (Macbook, iPhone)\n')
	processOrder(item, processPayment, processError);
}

displayPrompt();
