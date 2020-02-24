import React from "react";
import LookupHeader from "./LookupHeader";
import EmployeeTable from "./EmployeeTable";
import employees from "../api/data";

const EmployeeFinder = () => {
  return (
    <div>
      <LookupHeader />
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default EmployeeFinder;
