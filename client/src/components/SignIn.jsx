import React from "react";
import SignInFrom from "./SignInFrom";
import signup from "../assets/signupbg.png";

const SignIn = () => {
  return (
    <>
      {/* layout structure */}
      <div className="flex gap-24 items-center">
        {/*Left signup Image */}
        <div className="w-209 h-full bgimage">
          <img src={signup} className="w-full" />
        </div>
        {/*Right Login from */}
        <SignInFrom />
      </div>
    </>
  );
};

export default SignIn;
