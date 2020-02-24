import React from "react";
import Header from "./components/Header";
import EmployeeFinder from "./components/EmployeeFinder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <EmployeeFinder />
        </div>
      </div>
    </div>
  );
};

export default App;
