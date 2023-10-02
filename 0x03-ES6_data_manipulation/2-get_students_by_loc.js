export default function getStudentsByLocation(students, city) {
    if (!Array.isArray(students) || typeof city !== 'string') {
      return [];
    }
  
    return students.filter((stu) => stu.location === city);
  }
  