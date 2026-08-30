import React from "react";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";
import instructor from "../assets/instructor.png";

const Instructor = () => {
  return (
    <>
      <section id="instructor" className="bg-basicIt">
        <div className="container mx-auto">
          <div className="pt-20 pb-180">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;
