import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [staff, setStaff] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const LogIn = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/stafflogin`,
        staff
      );
      if (response) {
        alert("Log in Succesfully")
        navigate("/students");
      } else {
        alert("Please enter valied email and password !");
      }
    } catch (err) {
      console.log(err.response);
    }
    setStaff({ email: "", password: "" });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Staff Log In</h1>
      <form className="flex flex-col p-10 gap-10 border">
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border"
            value={staff.email}
            onChange={(e) => {
              setStaff({ ...staff, email: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="border"
            value={staff.password}
            onChange={(e) => {
              setStaff({ ...staff, password: e.target.value });
            }}
          />
        </div>
        <button
          className="border"
          type="button"
          onClick={() => {
            LogIn();
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Home;
