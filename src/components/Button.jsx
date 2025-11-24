import React from "react";
import { Link } from "react-router-dom";
const Button = ({ goto, title }) => {
  return (
    <Link
      to={goto}
      className="fixed left-1.5 top-2.5 border p-2 rounded-xl cursor-pointer  bg-blue-600 text-white "
    >
      {title}
    </Link>
  );
};
export default Button;
