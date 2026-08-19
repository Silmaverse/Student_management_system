import React from "react";
import banner from '../../src/assets/HeroImage.png'
import { Link } from "react-router";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="part flex">
          <div className="left w-162 space-y-10  py-25 pl-30    ">
            <h1 className="text-[72px]/[74px] tracking-[-0.02em] font-brand font-semibold text-primary ">
              Learn with expert anytime anywhere
            </h1>
            <p className="text-[24px] font-brand font-normal text-boxestext">
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </p>
             <Button variant="primary" children={"Create Account"}/>           
          </div>
          <div className="right">
            <img src={banner} alt="error" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
