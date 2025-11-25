import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Poster from "./../assets/college_poster.png";

const Home = () => {
  const [staff, setStaff] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const LogIn = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/stafflogin`,
        staff
      );
      if (response) {
        localStorage.setItem("staff", response.data.data.email);
        localStorage.setItem(
          "staffjwtauthenticationToken",
          response.data.token
        );
        alert("Log in Successfully");
        navigate("/students");
      } else {
        alert("Please enter valid email and password!");
      }
    } catch (err) {
      alert("please enter valid crdentials.");
    }
    setStaff({ email: "", password: "" });
  };

  return (
    <div className="flex flex-col w-full items-center justify-start">
      <img src={Poster} alt="SVIT poster" className="w-full h-auto" />

      <h1 className="text-2xl font-semibold mt-5">Staff Log In</h1>

      <form className="flex flex-col p-10 gap-10 border mt-5 w-full max-w-md bg-white rounded-lg shadow">
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border p-2 rounded"
            value={staff.email}
            onChange={(e) => setStaff({ ...staff, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <div className="flex flex-row gap-2">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter Your Password"
              className="border p-2 rounded w-full"
              value={staff.password}
              onChange={(e) => setStaff({ ...staff, password: e.target.value })}
            />

            <button
              type="button"
              className="border px-3 cursor-pointer rounded"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          className="border py-2 cursor-pointer rounded bg-blue-500 text-white"
          type="button"
          onClick={LogIn}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Home;
