import React from "react";

const SingleSkills = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap -2 relative ">
        <div className="bg-White text-Cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-DarkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-Orange">
          {imgSvg}
        </div>
        <p className="text-White font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-Orange absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkills;
