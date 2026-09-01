import React from "react";
import Info from "../utils/Info";
import Button from "../utils/Button";
import {  IoIosArrowRoundForward } from "react-icons/io";
import googlesignup from "../assets/googlesignup.png";
import facebooksignup from "../assets/facebooksignup.png";
import applesignup from "../assets/applesignup.png";

const RegisterFrom = () => {
  return (
    <>
      {/*Right createAccount from */}
      <div className="w-162 ">
        {/* heading  */}
        <h1 className="text-[40px] font-semibold font-brand text-primary py-10">
          Create your account
        </h1>
        <form>
          {/* Name Info */}
          <Info
            item={"label"}
            children1={"FullName"}
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "var(--color-primary)",
            }}
          />
          <div className="w-full border border-boxes mt-3.5">
            <input
              type="text"
              className="w-full py-3.25 pl-3.25 outline-0 "
              placeholder="FullName"
            />
          </div>
          {/* Email Info */}
          <Info
            item={"label"}
            children1={"Email"}
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "var(--color-primary)",
              paddingTop: "18px",
              display: "block",
            }}
          />
          <div className="w-full border border-boxes mt-3.5">
            <input
              type="text"
              className="w-full py-3.25 pl-3.25 outline-0 "
              placeholder="Email"
            />
          </div>
          {/* Password Info */}
          <div className="flex justify-between items-center">
            <div className=" w-77 ">
              <Info
                item={"label"}
                children1={"Password"}
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "var(--color-primary)",
                  paddingTop: "18px",
                  display: "block",
                }}
              />
              <div className="w-full border border-boxes mt-3.5">
                <input
                  type="text"
                  className=" w-full py-3.25 pl-3.25 outline-0 "
                  placeholder="Password"
                />
              </div>
            </div>
            {/*Confrim Password Info */}
            <div className="mt-1.5 w-77 ">
              <Info
                item={"label"}
                children1={"Confirm Password"}
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "var(--color-primary)",
                  paddingTop: "18px",
                  display: "block",
                }}
              />
              <div className="w-full border border-boxes mt-3.5">
                <input
                  type="text"
                  className=" w-full py-3.25 pl-3.25 outline-0 "
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>
            <div className="flex justify-between items-center mt-6">
              {/* Agree with terms and conditions */}
              <div className="flex gap-2 items-center ">
              <div className="w-5.5 h-5.5 border border-[#CED1D9]"></div>
              <p className="text-sm font-brand font-normal text-[#6E7485]">
                I Agree with all of your{" "}
                <span className="text-[#564FFD]">Terms & Conditions</span>
              </p>
              </div>
              {/* Create Account */}
              <Button type="submit" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                Create account 
                <IoIosArrowRoundForward size={20}/>
              </Button>
            </div>
            {/* Sign up with */}
            <div className="flex gap-1 items-center mt-10">
              <div className="w-70 h-0.5 bg-boxes"></div>
              <p className="text-sm w-22 font-brand font-medium text-boxes">Sign up with</p>
              <div className="w-70 h-0.5 bg-boxes"></div>
            </div>
            {/* auth account */}
            <div className="flex justify-between items-center mt-6">
              <div className="w-50 h-22">
                <img src={googlesignup} alt="Error"/>
              </div>
              <div className="w-50 h-22">
                <img src={facebooksignup} alt="Error"/>
              </div>
              <div className="w-50 h-22">
                <img src={applesignup} alt="Error"/>
              </div>
            </div>
        </form>
      </div>
    </>
  );
};

export default RegisterFrom;
