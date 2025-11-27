import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AddStudent from "./views/AddStudents";
import Students from "./views/Students";
import PerticularStudent from "./views/perticularStudent";
import EditStudent from "./views/EditStudent.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/student/:slug" element={<PerticularStudent />}></Route>
        <Route path="/student/edit/:slug" element={<EditStudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
