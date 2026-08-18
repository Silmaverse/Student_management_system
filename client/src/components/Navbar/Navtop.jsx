import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navtop = () => {
  return (
    <>
      <div className="navtop px-8 flex justify-between items-center">
        <div className="navleftul">
          <ul className="text-[14px] font-medium font-brand text-fivenary flex gap-10 items-center">
            <li className="hover:text-white relative transition-colors  delay-150 duration-300 ease-in-out  group cursor-pointer">
              Home
              <div className="absolute w-full scale-x-0 origin-right bg-brand h-0.5 -top-4 group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
            </li>
            <li className="hover:text-white relative transition-colors  delay-150 duration-300 ease-in-out  group cursor-pointer">
              Courses
              <div className="absolute w-full scale-x-0 origin-right bg-brand h-0.5 -top-4 group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
            </li>
            <li className="hover:text-white relative transition-colors delay-150 duration-300 ease-in-out  group cursor-pointer">
              About
              <div className="absolute w-full scale-x-0 origin-right bg-brand h-0.5 -top-4 group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
            </li>
            <li className="hover:text-white relative transition-colors  delay-150 duration-300 ease-in-out group cursor-pointer">
              Contact
              <div className="absolute w-full scale-x-0 origin-right bg-brand h-0.5 -top-4 group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
            </li>
            <li className="hover:text-white relative transition-colors  delay-150 duration-300 ease-in-out group cursor-pointer">
              Become an Instructor
              <div className="absolute w-full scale-x-0 origin-right bg-brand h-0.5 -top-4 group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer"></div>
            </li>
          </ul>
        </div>
        <div className="navrightul">
          <ul className="flex gap-6">
            <li className="text-[14px] font-normal font-brand flex gap-4 items-center text-fournary">
              USD <MdOutlineKeyboardArrowDown />
            </li>
            <li className="text-[14px] font-normal font-brand flex gap-4 items-center text-fournary">
              English <MdOutlineKeyboardArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navtop;
