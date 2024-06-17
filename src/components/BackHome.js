import React from "react";
import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <Link to="/">
      <button className="shadow-xl rounded-md p-1 flex items-center px-4 mx-8">
        <img
          className="h-4"
          src="assets/images/arrow-back-outline.svg"
          alt=""
        />
        Back Home
      </button>
    </Link>
  );
};

export default BackHome;
