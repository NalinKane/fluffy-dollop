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

  console.log("HOOKA selected: ", selectedDepartment);

  return (
    <div>
      <LookupHeader
        departments={uniqueDepartments}
        selectDepartment={setSelectedDepartment}
      />
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default EmployeeFinder;
