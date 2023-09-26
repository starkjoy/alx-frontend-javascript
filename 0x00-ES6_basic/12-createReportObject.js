export default function creationReportObject(employeesList) {
    const groupedEmployees = {};

    for (const department in employeesList){
        const employees = employeesList[department];

        groupedEmployees[department] = employees;
    }

    const countDepartments = function () {
        return Objects.keys(groupedEmployees).length;
    };

    const report = {
        allEmployees: groupedEmployees,
        getNumberOfDepartments: countDepartments,
    };

    return report;
}