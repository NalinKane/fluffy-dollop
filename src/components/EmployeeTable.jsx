import React from "react";
import EmployeeTableRow from "./EmployeeTableRow";

const EmployeeTable = ({ employees, handleSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            ID
            <button onClick={() => handleSort({ method: "asc", key: "id" })}>
              ↓
            </button>
            <button onClick={() => handleSort({ method: "desc", key: "id" })}>
              ↑
            </button>
          </th>
          <th scope="col">
            First name
            <button
              onClick={() => handleSort({ method: "asc", key: "firstName" })}
            >
              ↓
            </button>
            <button
              onClick={() => handleSort({ method: "desc", key: "firstName" })}
            >
              ↑
            </button>
          </th>
          <th scope="col">
            Last name
            <button
              onClick={() => handleSort({ method: "asc", key: "lastName" })}
            >
              ↓
            </button>
            <button
              onClick={() => handleSort({ method: "desc", key: "lastName" })}
            >
              ↑
            </button>
          </th>
          <th scope="col">
            Job title
            <button
              onClick={() => handleSort({ method: "asc", key: "jobTitle" })}
            >
              ↓
            </button>
            <button
              onClick={() => handleSort({ method: "desc", key: "jobTitle" })}
            >
              ↑
            </button>
          </th>
          <th scope="col">
            Department
            <button
              onClick={() => handleSort({ method: "asc", key: "department" })}
            >
              ↓
            </button>
            <button
              onClick={() => handleSort({ method: "desc", key: "department" })}
            >
              ↑
            </button>
          </th>
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
