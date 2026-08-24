import React from "react";

const CategoryCard = ({ imgsrc, bgColor, custom, coursename, totalcourse }) => {
  return (
    <>
      <div
        className={`w-78 px-5 py-8 ${bgColor} ${custom} flex justify-center gap-6 items-center`}
      >
        <div className="w-16 h-16 bg-white flex items-center justify-center">
          <img src={imgsrc} alt="error" />
        </div>
        <div className="text flex flex-col gap-1">
          <div className="text-[16px] font-brand font-medium">{coursename}</div>
          <div className="text-[14px] font-brand font-normal">
            {totalcourse}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
