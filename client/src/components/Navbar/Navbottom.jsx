import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import brandImage from "../../assets/brandImage/GraduationCap.png";
import { GrNotification } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const Navbottom = () => {
  return (
    <>
    <div className="navbottom flex justify-between items-center py-3">
            <div className="navleft flex gap-12.5 items-center ">
              <div className="navlogo flex gap-2 ">
                <div className="navimg w-10 h-10">
                  <img src={brandImage} alt="error" />
                </div>
                <h1 className="text-[32px] font-semibold font-brand text-primary">
                  E-tutor
                </h1>
              </div>
              <div className="flex gap-4 items-center">
                <div className="browse w-50 h-12 border-2 border-boxes px-4.5 py-3 flex justify-between items-center">
                  <p className="text-[16px] font-inter front-normal font-brand text-boxestext">
                    Browse
                  </p>
                  <div className="text-[16px] font-inter front-normal text-boxestext">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="inputboxes w-106 h-12 border-2 px-4.5 py-3 border-boxes flex gap-3 items-center">
                  <div className="text-[16px] text-fivenary">
                    <IoSearchOutline />
                  </div>
                  <input
                    placeholder=" What do you want learn..."
                    className="text-[16px] font-normal font-brand text-fivenary outline-0"
                  />
                </div>
              </div>
            </div>
            <div className="navright flex gap-10 items-center">
              <div className="navulright">
                 <ul className="flex items-center gap-3">
                  <li className="size-6 text-primary"><GrNotification /></li>
                  <li className="size-6 text-primary"><FaRegHeart /></li>
                  <li className="size-6 text-primary"><FiShoppingCart /></li>
                 </ul>
              </div>
              <div className="navbtn flex gap-3">
                <button className="text-[12px] font-semibold font-brand w-42 h-12 bg-secondarybtn text-brand">Create Account</button>
                <button className="text-[12px] font-semibold font-brand w-25 h-12 bg-brand text-white">Sign In</button>
              </div>
            </div>
          </div>

    </>
  )
}

export default Navbottom