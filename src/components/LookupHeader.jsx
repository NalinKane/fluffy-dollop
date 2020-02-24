import React from "react";

const LookupHeader = ({ departments, selectDepartment }) => {
  function handleSelectDepartment(e) {
    const selected = e.target.value;
    if (selected) {
      selectDepartment(selected);
    }
  }

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-8">
          <label htmlFor="inputCity">Search term</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Filter by</label>
          <select
            id="inputState"
            className="form-control"
            onChange={handleSelectDepartment}
          >
            <option value="department-all">All</option>
            {departments.map(function renderDepartment(department, i) {
              return (
                <option
                  key={i}
                  value={`department-${department.toLowerCase()}`}
                >
                  {department}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
};

export default LookupHeader;
