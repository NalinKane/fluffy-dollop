import React from "react";
import EmployeeTableRow from "./EmployeeTableRow";

const EmployeeTable = ({ employees }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Job title</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(function renderEmployeeRow(employee, i) {
          return <EmployeeTableRow key={i} employee={employee} />;
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
