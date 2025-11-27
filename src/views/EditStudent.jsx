import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const EditStudent = () => {
  //load student
  const [data, setData] = useState({});
  //new student data
  const [student, setStudent] = useState({});

  const { slug } = useParams();
  //load student data 1st
  const loadStudentData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/student/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "staffjwtauthenticationToken"
          )}`,
        },
      }
    );
    if (response) {
      setData(response.data.data);
    } else {
      alert("student not found.");
    }
  };
  //load student data function
  useEffect(() => {
    loadStudentData();
  }, []);

  //edit student data 2nd by onClick
  const EditStudentdata = async () => {
    const editStudent = await axios.put(
      `${import.meta.env.VITE_API_URL}/student/edit/${edit}`,
      student,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("staffjwtauthenticationToken")}`,
        },
      }
    );
    if (editStudent) {
      setStudent(editStudent.data.data);
    } else {
      alert("something went wrong, student not found!");
    }
  };

  return (
    <div>
      <Navbar />
      {data.name}
      <button
        onClick={() => {
          EditStudentdata();
        }}
      >
        Save Edit
      </button>
    </div>
  );
};
export default EditStudent;
