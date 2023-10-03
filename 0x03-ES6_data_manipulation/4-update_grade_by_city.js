export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
      return [];
    }
  
    return students
      .filter((stu) => stu.location === city)
      .map((student) => {
        const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
        const updatedStudent = { ...student }; // Clone the student object
        if (gradeObj) {
          updatedStudent.grade = gradeObj.grade;
        } else {
          updatedStudent.grade = 'N/A';
        }
        return updatedStudent;
      });
  }
  