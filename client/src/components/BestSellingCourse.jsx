import React from "react";
import Info from "../utils/Info";
import CourseCard from "../utils/CourseCard";
import designimg from "../assets/design.png";
import development from "../assets/developmnet.png";
import marketing from "../assets/marketing.png";
import business from "../assets/business.png";
import software from "../assets/software.png";
import Featured from "./Featured";

const BestSellingCourse = () => {
  return (
    <>
      <section id="Bestsellingcourse" className="bg-basicIt relative pb-97.5 ">
        <div className="container ">
          {/* heading part*/}
          <div className="courses pt-20 ">
            <Info
              children1={"Best selling courses"}
              item={"h1"}
              style={{
                fontSize: "40px",
                fontWeight: "600",
                textAlign: "center",
              }}
            />
            {/* all course card */}
            <div className="flex flex-wrap gap-6.25 pt-10 justify-center items-center">
              <CourseCard
                courseimg={designimg}
                tag={"Design"}
                bgcolor={"bg-[#FFEEE8]"}
                textColor={"text-[#993D20]"}
                title1={"Machine Learning A-Z™:Hands-On"}
                title2={"Python & R In Data...s"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={development}
                tag={"Developments"}
                bgcolor={"bg-[#EBEBFF]"}
                textColor={"text-[#342F98]"}
                title={"The Complete 2021 Web Development Bootcamp"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={marketing}
                tag={"Python"}
                bgcolor={"bg-[#E1F7E3]"}
                textColor={"text-[#15711F]"}
                title={"Learn Python Programming Masterclass"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={business}
                tag={"Marketing"}
                bgcolor={"bg-[#EBEBFF]"}
                textColor={"text-[#342F98]"}
                title={
                  "The Complete Digital Marketing Course - 12 Courses in 1"
                }
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={software}
                tag={"IT & Software"}
                bgcolor={"bg-[#FFF0F0]"}
                textColor={"text-[#882929]"}
                title={"Reiki Level I, II and Master/Teacher Program"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={development}
                tag={"Developments"}
                bgcolor={"bg-[#EBEBFF]"}
                textColor={"text-[#342F98]"}
                title={"The Complete 2021 Web Development Bootcamp"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={marketing}
                tag={"Python"}
                bgcolor={"bg-[#E1F7E3]"}
                textColor={"text-[#15711F]"}
                title={"Learn Python Programming Masterclass"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={business}
                tag={"Marketing"}
                bgcolor={"bg-[#EBEBFF]"}
                textColor={"text-[#342F98]"}
                title={
                  "The Complete Digital Marketing Course - 12 Courses in 1"
                }
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={software}
                tag={"IT & Software"}
                bgcolor={"bg-[#FFF0F0]"}
                textColor={"text-[#882929]"}
                title={"Reiki Level I, II and Master/Teacher Program"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
              <CourseCard
                courseimg={designimg}
                tag={"Design"}
                bgcolor={"bg-[#FFEEE8]"}
                textColor={"text-[#993D20]"}
                title1={"Machine Learning A-Z™:Hands-On"}
                title2={"Python & R In Data...s"}
                price={"$57"}
                rating={"5.0"}
                enrolledstudents={"265.7K"}
              />
            </div>
          </div>
        {/* overlay section */}
        <div className="absolute left-1/2 bottom-[0%] -translate-x-1/2 translate-y-1/2 w-370 z-10 outline-boxes outline-1">
        <Featured/>
        </div>
        </div>
      </section>
    </>
  );
};

export default BestSellingCourse;
