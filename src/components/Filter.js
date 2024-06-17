import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-between items-center p-2 mt-2 bg-indigo-900">
      <div>
        <input
          type="search"
          placeholder="Search by title"
          //onChange={(e) => setTitleFilter(e.target.value)}
          className="border border-indigo-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300 bg-indigo-700 mr-2"
        />
        <input
          type="number"
          placeholder="Filter by rating"
          min="0"
          max="10"
          //onChange={(e) => setRatingFilter(e.target.value)}
          className="border border-indigo-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300 w-36 bg-indigo-700"
        />
      </div>
      <div className="bg-indigo-700 py-2 px-3 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300">
        Add new movie
      </div>
    </div>
  );
};

export default Filter;
