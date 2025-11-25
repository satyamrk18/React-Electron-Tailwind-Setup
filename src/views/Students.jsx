import Navbar from "./../components/Navbar";
import Poster from "./../assets/college_poster.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Students = () => {
  const [studentsData, setStudentsData] = useState([]);

  // Getting the data from database
  const LoadData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/students`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "staffjwtauthenticationToken"
            )}`,
          },
        }
      );

      if (response.data?.data) {
        setStudentsData(response.data.data);
      } else {
        alert("No students found!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong, please try again later.");
    }
  };

  // Run on first page load
  useEffect(() => {
    LoadData();
  }, []);

  return (
    <div className="w-full">
      {/* FULL WIDTH POSTER */}
      <img src={Poster} alt="SVIT poster" className="w-full h-auto" />

      <Navbar />

      <div className="p-5">
        {studentsData.length > 0 ? (
          studentsData.map((studObj, index) => (
            <div key={index} className="border p-2 my-2 rounded shadow">
              <h2 className="text-lg font-semibold">{studObj.name}</h2>
              <p className="text-sm text-gray-600">Roll No: {studObj.roll}</p>
            </div>
          ))
        ) : (
          <h1 className="text-center text-xl py-5">No Students Registered</h1>
        )}
      </div>
    </div>
  );
};

export default Students;
