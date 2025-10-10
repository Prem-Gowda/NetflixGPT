import React from "react";
import lang from "../Utils/language";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langChange = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[2%] flex justify-center">
      <form className="w-1/2  bg-black grid grid-cols-12">
        <input
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder={lang[langChange].searchPlaceHolder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-600">
          {lang[langChange].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
