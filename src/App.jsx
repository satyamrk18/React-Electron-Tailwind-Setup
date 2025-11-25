import React from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import AddStudent from "./views/AddStudents";
import Students from "./views/Students";
import PerticularStudent from "./views/perticularStudent";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/student/:slug" element={<PerticularStudent />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
