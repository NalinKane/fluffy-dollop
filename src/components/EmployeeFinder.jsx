import React, { useState } from "react";
import LookupHeader from "./LookupHeader";
import EmployeeTable from "./EmployeeTable";
import employees from "../api/data";

function getListOfDepartments() {
  const departments = [];
  employees.map(employee => {
    if (!departments.includes(employee.department)) {
      departments.push(employee.department);
    }
    return employee;
  });
  return departments.sort();
}

const EmployeeFinder = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(
    "department-all"
  );
  const uniqueDepartments = getListOfDepartments();

  console.log("hook selectedDepartment is: ", selectedDepartment);

  const filteredEmployees = employees.filter(function getEmployeeByFilter(
    employee
  ) {
    const currentDepartment = `department-${employee.department}`.toLowerCase();
    return currentDepartment === selectedDepartment;
  });

  console.log("filtered employees are: ", filteredEmployees);

  const selectedEmployees =
    selectedDepartment === "department-all" ? employees : filteredEmployees;

  return (
    <div>
      <LookupHeader
        departments={uniqueDepartments}
        selectDepartment={setSelectedDepartment}
      />
      <EmployeeTable employees={selectedEmployees} />
    </div>
  );
};

export default EmployeeFinder;
