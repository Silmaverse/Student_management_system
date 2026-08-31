import React from "react";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";
import instructor from "../assets/instructor.png";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  return (
    <>
      <section id="instructor" className="bg-basicIt relative">
        <div className="container mx-auto">
          <div className="pt-20 pb-97.5">
            {/* layOut Structure */}
            <div className="flex gap-6 justify-center items-center">
              {/* left section */}
              <div className="w-162 bg-brand px-10 pt-10  flex gap-6 ">
                {/* Instructor Info */}
                <div className="pb-10">
                  <h2 className="text-white text-[32px] font-brand font-semibold">
                    Become an instructor
                  </h2>
                  <p className="w-77.75 text-white text-sm font-brand font-normal py-4">
                    Become an instructor Instructors from around the world teach
                    millions of students on Udemy. We provide the tools and
                    skills to teach what you love.
                  </p>
                  <Link className="w-49 h-12 p-3 text-[16px] font-semibold font-brand flex gap-2 items-center justify-center bg-white text-brand ">
                    Start teaching
                    <IoIosArrowRoundForward size={30} />
                  </Link>
                </div>
                {/* Instructor Image */}
                <div className="img pt-5">
                  <img src={instructor} alt="Error" />
                </div>
              </div>
              {/* Right Section */}
              <div className="w-162  py-10 pl-10 bg-white">
                {/* heading */}
                <h2 className="text-[32px] font-semibold font-brand text-primary">
                  Your teaching & earning steps
                </h2>
                {/* steps by steps */}
                <div className="flex flex-wrap gap-6 items-center  pt-10">

                <div className="flex gap-2 items-center">
                  <div className="text-2xl font-semibold font-brand flex justify-center items-center steps w-13 h-13 bg-[#EBEBFF] text-[#564FFD] rounded-full">
                    1
                  </div>
                  <p className="text-sm font-normal font-brand">
                    Apply to become instructor
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-2xl font-semibold font-brand flex justify-center items-center steps w-13 h-13 bg-card2 text-brand rounded-full">
                    2
                  </div>
                  <p className="text-sm font-normal font-brand">
                    Build & edit your profile
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-2xl font-semibold font-brand flex justify-center items-center steps w-13 h-13 bg-card2 text-[#E34444] rounded-full">
                    3
                  </div>
                  <p className="text-sm font-normal font-brand">
                    Create your new course
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-2xl font-semibold font-brand flex justify-center items-center steps w-13 h-13 bg-carddatabase text-[#23BD33] rounded-full">
                    4
                  </div>
                  <p className="text-sm font-normal font-brand">
                    Start teaching & earning
                  </p>
                </div>
                </div>
              </div>
            </div>
            {/* Overlay Section top instructor*/}
            <div className="w-370 absolute left-1/2 bg-white outline-1 outline-boxes p-20 -translate-x-1/2 bottom-0 translate-y-1/2">
             <InstructorCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;
