import React from "react";

const FooterToppart = () => {
  return (
    <>
      <div className="toppart border-b border-b-[#9b9da3 ] flex gap-34 justify-center items-center">
        <div className="left">
          <h1 className="w-134 text-[40px] font-semibold font-brand text-white">
            Start learning with 67.1k students around the world.
          </h1>
          <div className="btn pt-7.5 pb-[100px] flex gap-4 items-center">
            <button className="text-[16px] font-semibold font-brand w-42 h-12 bg-brand text-white">
              Join the Family
            </button>

            <button className="text-[16px] font-semibold font-brand w-42 h-12 bg-footericon text-white">
              Browse all courses
            </button>
          </div>
        </div>
        <div className="right flex gap-6 items-center">
          <div className="txt1">
            <h2 className="text-[40px] font-semibold font-brand text-white">
              6.3k
            </h2>
            <p className="text-[16px] font-medium  font-brand text-ternary">
              Online courses
            </p>
          </div>
          <div className="txt2">
            <h2 className="text-[40px] font-semibold font-brand text-white">
              26k
            </h2>
            <p className="text-[16px] font-medium  font-brand text-ternary">
              Certified Instructor
            </p>
          </div>
          <div className="txt3">
            <h2 className="text-[40px] font-semibold font-brand text-white">
              99.9%
            </h2>
            <p className="text-[16px] font-medium  font-brand text-ternary">
              Sucess Rate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterToppart;
