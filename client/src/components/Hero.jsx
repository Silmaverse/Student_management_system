import React from "react";
import banner from "../../src/assets/HeroImage.png";
import { Link } from "react-router";
import Button from "../utils/Button";
import Info from "../utils/Info";

const Hero = () => {
  return (
    <>
      <section id="hero" className="bg-[#F0F2F5]">
        <div className="container">
          {/* layout division */}
          <div className="part flex">
            {/* Left part */}
            <div className="left w-162 space-y-10  pt-20 pl-35">
              <Info
                item="h1"
                broke={true}
                children1={"Learn with expert"}
                children2={"anytime anywhere"}
                style={{
                  width: "100%",
                  lineHeight: "74px",
                  letterSpacing: "-0.02em",
                }}
              />
              <Info
                item="p"
                children1={
                  "Our mision is to help people to find the best course online and learn with expert anytime, anywhere."
                }
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "var(--color-boxestext)",
                }}
              />
              <p className="text-[24px] font-brand font-normal text-boxestext"></p>
              <Link>
                <Button variant="primary" children={"Create Account"} />
              </Link>
            </div>
            {/* Right part */}
            <div className="right ">
              <img src={banner} alt="error" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
