import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import brandImage from "../../assets/brandImage/GraduationCap.png";
import { GrNotification } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Navtop from "./Navtop";
import Navbottom from "./Navbottom";


const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <div className="container py-6 bg-primary">
          <Navtop/>
        </div>
        <div className="container">
          <Navbottom/>
        </div>
      </section>
    </>
  );
};

export default Navbar;
