export default function createEmployeesObject(departmentName, employees) {
  // Create an object with the departmentName as the key and employees as the value
  const employeesObject = {
    [departmentName]: employees,
  };

  // Return the created object
  return employeesObject;
}
