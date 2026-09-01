import React from "react";
import brandImage from "../../assets/brandImage/GraduationCap.png";
import Info from "../../utils/Info";
import { Link } from "react-router";

const SigunUpNavbar = () => {
  return (
    <>
      {/* NavLogo */}
      <div className="flex px-45 py-6 border-b border-boxes justify-between items-center">
        <Link to={'/'} className="navlogo flex gap-2 items-center">
          <div className="navimg w-10 h-10">
            <img src={brandImage} alt="error" />
          </div>
          <Info
            item={"h1"}
            children1={"E-tutor"}
            style={{
              fontSize: "32px",
              fontWeight: "600",
              color: "var(--color-primary)",
            }}
          />
        </Link>
        {/* Button createAccount don not have account*/}
        <div className="flex gap-2 items-center">
          <Link to={"/auth/login"} className="text-sm font-brand font-normal text-boxestext">
             Have an account?
          </Link>
          <Link
            to={"/auth/register"}
            className="w-42 h-12 flex justify-center items-center text-[16px] font-semibold bg-secondarybtn text-brand font-brand"
          >
            Create Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default SigunUpNavbar;
