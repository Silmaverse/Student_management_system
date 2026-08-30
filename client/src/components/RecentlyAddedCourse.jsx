import React from "react";
import CourseCard from "../utils/CourseCard";
import software from "../assets/software.png";

const RecentlyAddedCourse = () => {
  return (
    <>
      <section id="recentlyadded" className="bg-white pt-100 ">
        <div className="container ">
          <div className="py-20.5 px-80">
            {/* Course heading */}
            <h1 className="text-[40px] font-semibold font-brand text-black text-center">
              Recently added courses
            </h1>
            {/* Course card */}
            <div className="flex gap-4 justify-center pt-10 items-center">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentlyAddedCourse;
