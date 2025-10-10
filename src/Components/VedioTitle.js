import React from "react";

const VedioTitle = ({ title, description }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="text-lg w-1/4 py-6">{description}</p>
      <div>
        <button className="bg-white text-lg text-black py-2 px-8 hover:bg-opacity-50">Play</button>
        <button className="bg-gray-500 text-lg text-white py-2 px-8 mx-2">More Info</button>
      </div>
    </div>
  );
};

export default VedioTitle;
