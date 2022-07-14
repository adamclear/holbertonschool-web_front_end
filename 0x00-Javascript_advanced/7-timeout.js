console.log('Start of the execution queue');

setTimeout(() => console.log('Final code block to be executed'), 0);

for (x = 1; x < 101; x++) {
	console.log(x);
}

console.log('End of the loop printing');
