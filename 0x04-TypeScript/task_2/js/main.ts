interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	constructor() {}

	workFromHome() {
		return `Working from home`;
	}

	getCoffeeBreak() {
		return `Getting a coffee break`;
	}

	workDirectorTasks() {
		return `Getting to director tasks`;
	}
}

class Teacher implements TeacherInterface {
	constructor() {}

	workFromHome() {
		return `Cannot work from home`;
	}
	
	getCoffeeBreak() {
		return `Cannot have a break`;
	}

	workTeacherTasks() {
		return `Getting to work`;
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

function isDirector(employee: Teacher | Director): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	} else if (todayClass === 'History') {
		return 'Teaching History';
	}
}
