import React from "react";
import CourseCard from "../utils/CourseCard";
import software from "../assets/software.png";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";


const RecentlyAddedCourse = () => {
  return (
    <>
      <section id="recentlyadded" className="bg-white pt-100.75 ">
        <div className="container ">
          <div className="pb-20 px-75">
            {/* Course heading */}
            <h1 className="text-[40px] pt-10 font-semibold font-brand text-black text-center">
              Recently added courses
            </h1>
            {/* Course card */}
            <div className="flex gap-4 justify-center pt-15 pb-10 items-center">
              <CourseCard
                customStyle={"outline-1 outline-[#E9EAF0]"}
                courseimg={software}
                title={
                  "The Python Mega Course: Build 10 Real World Applications"
                }
                tag={"Design"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                customStyle={"outline-1 outline-[#E9EAF0]"}
                courseimg={software}
                title={
                  "The Python Mega Course: Build 10 Real World Applications"
                }
                tag={"Design"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                customStyle={"outline-1 outline-[#E9EAF0]"}
                courseimg={software}
                title={
                  "The Python Mega Course: Build 10 Real World Applications"
                }
                tag={"Design"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                customStyle={"outline-1 outline-[#E9EAF0]"}
                courseimg={software}
                title={
                  "The Python Mega Course: Build 10 Real World Applications"
                }
                tag={"Design"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                customStyle={"outline-1 outline-[#E9EAF0]"}
                courseimg={software}
                title={
                  "The Python Mega Course: Build 10 Real World Applications"
                }
                tag={"Design"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
            </div>
            <Link className="w-56 mx-auto h-12 text-[16px] font-brand font-bold flex gap-3 justify-center items-center bg-[#FFEEE8] text-brand">
             Browse all Course
             <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentlyAddedCourse;
