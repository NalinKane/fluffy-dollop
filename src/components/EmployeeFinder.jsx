import React, { useState, useEffect } from "react";
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

function compareBy(method, key) {
  return function(a, b) {
    if (method === "asc") {
      if (a[key] > b[key]) return 1;
      if (a[key] < b[key]) return -1;
    }

    if (method === "desc") {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
    }

    return 0;
  };
}

const EmployeeFinder = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(
    "department-all"
  );
  const [sortBy, setSortBy] = useState({ method: "", key: "" });
  const [selected, setSelected] = useState(employees);

  const uniqueDepartments = getListOfDepartments();

  useEffect(() => {
    const filteredEmployees = employees.filter(function getEmployeeByFilter(
      employee
    ) {
      const currentDepartment = `department-${employee.department}`.toLowerCase();
      return currentDepartment === selectedDepartment;
    });

    const selectedEmployees =
      selectedDepartment === "department-all" ? employees : filteredEmployees;

    let newList = [...selectedEmployees];
    newList.sort(compareBy(sortBy.method, sortBy.key));
    setSelected(newList);
  }, [sortBy, selectedDepartment]);

  return (
    <div>
      <LookupHeader
        departments={uniqueDepartments}
        selectDepartment={setSelectedDepartment}
      />
      <EmployeeTable employees={selected} handleSort={setSortBy} />
    </div>
  );
};

export default EmployeeFinder;
