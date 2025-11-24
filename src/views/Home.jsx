import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios"
const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-green-700">All Students</h1>
    </div>
  );
};

export default Home;
