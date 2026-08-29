import React from "react";
import Info from "./Info";
import { IoStar } from "react-icons/io5";

const CourseCard = ({
  courseimg,
  title,
  title1,
  title2,
  tag,
  price,
  rating,
  enrolledstudents,
  bgcolor,textColor
}) => {
  return (
    <>
      <div className="w-68 h-100 bg-white">
         {/* Course Image */}
        <div className="courseimg w-full ">
          <img src={courseimg} className="w-full h-full object-cover" />
        </div>
          {/* Course Info */}
        <div className="border-b border-b-fivenary  py-4 px-4">
          <div className="flex justify-between items-center">
            <div className={`py-2 px-4 ${bgcolor} ${textColor} flex justify-center items-center`}>
              <Info
                item={"p"}
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: `${textColor}`,
                }}
                children1={tag}
              />
            </div>
            <Info
              item={"h4"}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "var(--color-brand)",
              }}
              children1={price}
            />
          </div>
          {
            title?
            <Info
              item={"h4"}
              style={{ fontSize: "14px", fontWeight: "600",paddingTop:"14px",width:"216px"  }}
              children1={title}
            />:<Info
              item={"h4"}
              style={{ fontSize: "14px", fontWeight: "600",paddingTop:"14px",width:"216px"  }}
              children1={title1} children2={title2} broke={true}
            />
          }
        </div>
          {/* Rating + Students */}
        <div className="flex justify-between items-center p-4">
          <div className="flex gap-1 items-start">
            <IoStar className="text-brand" size={16} />
            <Info
              item={"p"}
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "var(--color-boxestext)",
              }}
              children1={rating}
            />
          </div>
          <div className="flex gap-1 items-center">
            <Info
              item={"p"}
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "var(--color-boxestext)",
              }}
              children1={enrolledstudents}
            />
             <Info
              item={"p"}
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "var(--color-fivenary)",
              }}
              children1={"students"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
