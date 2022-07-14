function countPrimeNumbers() {
	let count = 0;
	for (x = 2; x <= 100; x++) {
		if (isPrime(x)) {
			count++;
		}
	}
	return count;
}

function isPrime(num) {
	for (y = 2; y < num; y++) {
		if (num % y === 0) {
			return false;
		}
	}
	return true;
}

start =  performance.now();
for (z = 0; z < 100; z++) {
	countPrimeNumbers();
}
end = performance.now();
console.log(`Execution time of calculating countPrimeNumbers 100 times was ${end - start} milliseconds.`);