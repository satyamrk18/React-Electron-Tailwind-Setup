import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  UNSAFE_WithComponentProps,
} from "react-router-dom";
import Home from "./views/Home";
import AddStudent from "./views/AddStudents";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
