export default function createIteratorObject(report) {
    // Create a generator function to yield each employee
    function* employeeGenerator() {
      for (const dep of Object.keys(report.allEmployees)) {
        for (const empl of report.allEmployees[dep]) {
          yield empl;
        }
      }
    }
  
    // Return an iterator
    return employeeGenerator();
  }
  