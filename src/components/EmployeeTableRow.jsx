import React from "react";

const EmployeeTableRow = ({ employee }) => {
  const { id, firstName, lastName, jobTitle, department } = employee;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{jobTitle}</td>
      <td>{department}</td>
    </tr>
  );
};

export default EmployeeTableRow;
