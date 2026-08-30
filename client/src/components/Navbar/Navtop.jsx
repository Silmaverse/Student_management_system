import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import NavItem from "../../utils/NavItem";

const Navtop = () => {
  return (
    <>
      <div className="navtop px-8 flex justify-between items-center">
        {/* Left section */}
        <div className="navleftul">
          {/* nav item */}
          <ul className="flex gap-10 items-center">
            <NavItem
              style={{
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "var(--font-brand)",
              }}
              children={"Home"}
            />
            <NavItem
              style={{
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "var(--font-brand)",
              }}
              children={"Courses"}
            />
            <NavItem
              style={{
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "var(--font-brand)",
              }}
              children={"About"}
            />
            <NavItem
              style={{
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "var(--font-brand)",
              }}
              children={"Contact"}
            />
            <NavItem
              style={{
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "var(--font-brand)",
              }}
              children={"Become an Instructor"}
            />
          </ul>
        </div>
        {/* Right section */}
        <div className="navrightul">
          {/* Nav item language option */}
          <ul className="flex gap-6 items-center">
            <NavItem
              children={"USD"}
              children2={<MdOutlineKeyboardArrowDown />}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "var(--font-brand)",
                display:'flex',
                gap:'8px',
                alignItems:'center'
              }}
              line={false}
              userstyle={false}
            />
            <NavItem
              children={"English"}
              children2={<MdOutlineKeyboardArrowDown />}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "var(--font-brand)",
                display:'flex',
                gap:'8px',
                alignItems:'center'
              }}
              line={false}
              userstyle={false}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navtop;
