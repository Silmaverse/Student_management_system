import React from 'react'
import Info from "../utils/Info";
import { IoStar } from "react-icons/io5";

const TeacherCardDesign = ({teacgerImg,title,subtitle}) => {
  return (
    <>
      {/* Instructor Card */}
          <div className="w-61 outline-1 outline-boxes bg-white">
            {/*Instructor Image  */}
            <div className="w-full h-61">
                <img src={teacgerImg} alt="Error"/>
            </div>
            {/* Instructor Info */}
            <div className="border-b border-boxes">
                <h2 className="text-[16px] font-brand font-medium text-primary text-center pt-3">{title}</h2>
                <p className="text-[14px] font-brand font-normal text-[#8C94A3] text-center pt-1 pb-3">{subtitle}</p>
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
              children1={"4.6"}
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
              children1={"854"}
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
  )
}

export default TeacherCardDesign