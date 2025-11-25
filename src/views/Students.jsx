import Navbar from "./../components/Navbar";
import Poster from "./../assets/college_poster.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
const Students = () => {
  const [studentsData, setStudentsData] = useState([]);
const navigate = useNavigate()
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

      <div className="w-full">
        <table className="w-full border-collapse bg-white shadow-sm rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">
                Roll No
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">
                Year of Study
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">
                Academic Year
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">
                College ID
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">
                Aadhar No.
              </th>
            </tr>
          </thead>

          <tbody>
            {studentsData.map((s) => (
              <tr
                key={s.college_ID}
                className="border-t cursor-pointer hover:bg-gray-100"
                onClick={() => navigate(`/student/${s.slug}`)}
              >
                <td className="px-4 py-3 text-sm">{s.rollNo}</td>
                <td className="px-4 py-3 text-sm">{s.name}</td>
                <td className="px-4 py-3 text-sm">{s.year_of_study}</td>
                <td className="px-4 py-3 text-sm">{s.year}</td>
                <td className="px-4 py-3 text-sm">{s.college_ID}</td>
                <td className="px-4 py-3 text-sm">{s.aadhaNo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Display "Student not found" message */}
        
      </div>
    </div>
  );
};

export default Students;
