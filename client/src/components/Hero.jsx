import React from "react";
import banner from '../../src/assets/HeroImage.png'
import { Link } from "react-router";
import Button from "../utils/Button";
import Info from "../utils/Info";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="part flex">
          <div className="left w-162 space-y-10  py-25 pl-35">
            <Info item="h1" broke={true} children1={"Learn with expert"} children2={"anytime anywhere"} style={{width:"100%"}}/>
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
