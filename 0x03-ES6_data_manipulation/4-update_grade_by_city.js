export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
      return [];
    }
  
    return students
      .filter((stu) => stu.location === city)
      .map((student) => {
        const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
        if (gradeObj) {
          student.grade = gradeObj.grade;
        } else {
          student.grade = 'N/A';
        }
        return student;
      });
  }
  