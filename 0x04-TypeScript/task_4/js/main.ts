import { Subjects } from './subjects';

export const cpp = new Subjects.Cpp();
export const java = new Subjects.JavaClass();
export const react = new Subjects.ReactClass();

export const cTeacher: Subjects.Teacher = {
	firstName: "John",
	lastName: "Doe",
	experienceTeachingC: 10,
};

console.log("Cpp");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("\nJava:");
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("\nReact:");
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

