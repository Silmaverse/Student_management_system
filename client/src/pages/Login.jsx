import React from "react";
import signup from "../assets/signupbg.png";
import Info from "../utils/Info";

const Login = () => {
  return (
    <>
      {/* layout structure */}
      <div className="flex gap-24 items-center">
        {/*Left signup Image */}
        <div className="w-209 h-full bgimage">
          <img src={signup} className="w-full" />
        </div>
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
                display:"block"
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
                    display:"block"
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
                    display:"block"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
