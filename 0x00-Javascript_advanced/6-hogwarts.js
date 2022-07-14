class studentHogwarts {
	constructor () {
		this.privateScore = 0;
		this.name = null;
	}

	#changeScoreBy(points) {
		this.privateScore += points;
	}

	setName(newName) {
		this.name = newName;
	}

	rewardStudent() {
		this.#changeScoreBy(1);
	}

	penalizeStudent() {
		this.#changeScoreBy(-1);
	}

	getScore() {
		return this.name + ': ' + this.privateScore;
	}
}

harry = new studentHogwarts();
harry.setName('Harry');
for(x = 0; x < 4; x++) {
	harry.rewardStudent();
}

draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
for(x = 0; x < 3; x++) {
	draco.penalizeStudent();
}

console.log(harry.getScore());
console.log(draco.getScore());
