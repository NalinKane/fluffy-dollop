import React from "react";
import Header from "./components/Header";
import EmployeeFinder from "./components/EmployeeFinder";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <EmployeeFinder />
        <Footer />
      </div>
    </div>
  );
};

export default App;
