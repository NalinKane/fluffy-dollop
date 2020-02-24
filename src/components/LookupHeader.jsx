import React from "react";

const LookupHeader = () => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-8">
          <label htmlFor="inputCity">Search term</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Filter by</label>
          <select id="inputState" className="form-control">
            <option value="">Choose...</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default LookupHeader;
