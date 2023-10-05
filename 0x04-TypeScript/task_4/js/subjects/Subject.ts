namespace Subjects {
	export class Subject {
		private teacher: Teacher | undefined;

		constructor(teacher: Teacher | undefined) {
			this.teacher = teacher;
		}

		setTeacher(firstName: string, lastName: string): void {
			this.teacher = { firstName, lastName };
		}
	}
}
