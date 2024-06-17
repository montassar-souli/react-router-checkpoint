import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ newData, setNewData }) => {
  const handleTitleChange = (e) => {
    setNewData((prevData) => ({
      ...prevData,
      filtered: {
        ...prevData.filtered,
        title: e.target.value,
      },
    }));
  };

  const handleRatingChange = (e) => {
    setNewData((prevData) => ({
      ...prevData,
      filtered: {
        ...prevData.filtered,
        rating: Number(e.target.value),
      },
    }));
  };
  return (
    <header>
      <div className="flex justify-between items-center p-2 mt-2 bg-indigo-900">
        <div>
          <input
            className="border border-indigo-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300 bg-indigo-700 mr-2"
            type="search"
            placeholder="Search by title"
            onChange={handleTitleChange}
            name="search"
          />
          <input
            className="border border-indigo-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300 w-36 bg-indigo-700"
            type="number"
            placeholder="Filter by rating"
            min="0"
            max="10"
            onChange={handleRatingChange}
            name="rating"
          />
        </div>
        <Link to="/addmovie">
          <div className="bg-indigo-700 py-2 px-3 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300">
            Add new movie
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
