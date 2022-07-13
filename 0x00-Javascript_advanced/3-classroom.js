function createClassRoom(numberOfStudents) {
	function studentSeat(seat) {
		return () => seat;
	}
	let students = Array();
	for (let x = 0; x < numberOfStudents; x++) {
		students.push(studentSeat(x + 1));
	}
	return students;
}

const classRoom = createClassRoom(10);
