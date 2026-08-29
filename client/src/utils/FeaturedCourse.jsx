import React from "react";
import fitness from "../assets/fitness.png";
import profile from "../assets/profile.png";
import { IoStar } from "react-icons/io5";
import user from "../assets/user.png";
import courselevel from "../assets/courselevel.png";
import courseduration from '../assets/courseduration.png'

const FeaturedCourse = () => {
  return (
    <>
      <div className="w-162 h-47 flex gap-6 border border-black">
        <div className="flex ">
          {/* course image */}
          <div className="imgsection w-55">
            <img src={fitness} alt="error" />
          </div>
          {/* course info */}
          <div className="w-107 flex flex-col gap-2 items-center ">
            {/* tag part */}
            <div className="w-full px-4 pt-4 flex justify-between items-center">
              <div className="w-26.25 h-5 bg-carddatabase flex justify-center items-center p-3">
                <h2 className="text-[#15711F] font-medium font-brand  text-[10px]">
                  Health & Fitness
                </h2>
              </div>
              {/* price and old price */}
              <div className="flex gap-1 items-center">
                <h3 className="text-[18px] text-primary font-normal font-brand">
                  $14.00
                </h3>
                <p className="text-sm font-normal font-brand line-through text-fournary">
                  $26.00
                </p>
              </div>
            </div>
            <div className="w-full px-4 pt-2">
              <h2 className="text-[16px] font-brand font-medium text-primary">
                Investing In Stocks The Complete Course! (13 H...
              </h2>
            </div>
            <div className="w-full px-4 py-2 border-b-2 border-b-fivenary flex justify-between items-center">
              {/* teacher profile */}
              <div className="profile flex gap-2 items-center">
                <div className="w-7 h-7 rounded-full bg-transparent ">
                  <img src={profile} alt="Error" />
                </div>
                <p className="text-sm font-brand font-normal text-boxestext">
                  Kevin Gilbert
                </p>
              </div>
              {/* rating */}
              <div className="rating flex gap-1 items-center ">
                <IoStar className="text-brand" size={16} />
                <p className="text-sm font-brand font-normal text-primary">
                  5.0
                </p>
                <p className="text-sm font-normal font-brand text-[#8C94A3]">
                  (357,914)
                </p>
              </div>
            </div>
            {/* Numbers of students level and hours */}
            <div className="w-full px-4  py-2 flex justify-between items-center">
              <div className="students flex gap-2 items-center">
                <div className="img">
                  <img src={user} alt="Error" />
                </div>
                <div className="numbers flex gap-1">
                  <p className="text-sm font-semibold font-brand text-boxestext">
                    265.7K
                  </p>
                  <p className="text-sm font-normal font-brand text-fivenary">
                    {" "}
                    students
                  </p>
                </div>
              </div>
              {/* course level */}
              <div className="couselevel flex gap-1 items-center">
                <div className="levelimg">
                  <img src={courselevel} alt="Error" />
                </div>
                <p className="text-sm font-brand font-normal text-boxestext">
                  Beginner
                </p>
              </div>
              {/* course duration */}
              <div className="couselevel flex gap-1 items-center">
                <div className="levelimg">
                  <img src={courseduration} alt="Error" />
                </div>
                <p className="text-sm font-brand font-medium text-boxestext">
                  6 hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourse;
