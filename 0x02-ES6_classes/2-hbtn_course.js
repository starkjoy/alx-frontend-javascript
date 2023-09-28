export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students) || !students.every(student => typeof student === 'string')) {
        throw new Error('Invalid attribute types');
      }
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get get_name() {
      return this._name;
    }
  
    get get_length() {
      return this._length;
    }
  
    get get_students() {
      return this._students;
    }
  
    set set_name(name) {
      if (typeof name === 'string') {
        this._name = name;
      } else {
        throw new Error('Name must be a string');
      }
    }
  
    set set_length(length) {
      if (typeof length === 'number') {
        this._length = length;
      } else {
        throw new Error('Length must be a number');
      }
    }
  
    set set_students(students) {
      if (Array.isArray(students) && students.every(student => typeof student === 'string')) {
        this._students = students;
      } else {
        throw new Error('Students must be an array of strings');
      }
    }
  }
  