import React from "react";
import BackHome from "../BackHome";
const AddMovie = () => {
  return (
    <div>
      <BackHome />
      <form
        //onSubmit={}
        className="space-y-4 w-80 mx-auto"
        id="submiting"
      >
        <div>
          <label className="font-medium">title</label>
          <input
            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="text"
            //onChange={}
            required
            name="title"
          />
        </div>
        <div>
          <label className="font-medium">posterURL</label>
          <input
            type="text"
            //onChange={(e) => setMoviePosterURL(e.target.value)}
            required
            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">rating</label>
          <input
            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            type="number"
            //onChange={}
            min="0"
            max="10"
            required
            name="rating"
          />
        </div>
        <div>
          <label className="font-medium">description</label>
          <textarea
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            //onChange={/**/}
            required
            name="description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
