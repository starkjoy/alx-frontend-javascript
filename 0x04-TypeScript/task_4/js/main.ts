interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let firstStudent: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 24,
	location: "London"
};

let secondStudent: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 22,
	location: "York"
};

let studentList: Student[] = [firstStudent, secondStudent];

const table = document.createElement("table");

studentList.forEach((student) => {
	const row = document.createElement("tr");

	const firstNameCell = document.createElement("td");
	firstNameCell.textContent = student.firstName;

	const locationCell = document.createElement("td");
	locationCell.textContent = student.location;

	row.appendChild(firstNameCell);
	row.appendChild(locationCell);

	table.appendChild(row);
});

document.body.appendChild(table);
