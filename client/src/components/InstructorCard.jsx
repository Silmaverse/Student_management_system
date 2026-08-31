import React from "react";
import developer from "../assets/programmer.png"
import programmer from "../assets/Developer.png"
import TeacherCardDesign from "./TeacherCardDesign";
import Info from "../utils/Info";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

const InstructorCard = () => {
  return (
    <>
      <div className="">
        {/*Heading section  */}
        <h1 className="text-[40px] font-semibold font-brand text-primary pb-10 text-center">
          Top instructor of the month
        </h1>
        <div className="flex gap-2 justify-center items-center">
        <TeacherCardDesign teacgerImg={developer} title={"Devon Lane"} subtitle={"Developer"}/>
        <TeacherCardDesign teacgerImg={programmer} title={"Devon Lane"} subtitle={"Developer"}/>
        <TeacherCardDesign teacgerImg={developer} title={"Devon Lane"} subtitle={"Developer"}/>
        <TeacherCardDesign teacgerImg={programmer} title={"Devon Lane"} subtitle={"Developer"}/>
        </div>
        {/* bottom heading section browse all category */}
            <div className="pt-10 flex gap-2 items-center mx-auto w-fit">
              <Info
                item={"h3"}
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-brand)",
                  fontWeight: "400",
                  color: "var(--color-boxestext)",
                }}
                children1={"Thousands of students waiting for a instructor. Start teaching & earning now!."}
              />
              <Link className="text-sm font-medium font-brand text-brand flex gap-2 items-center ">
                Become Instructor
                <IoIosArrowRoundForward className="size-6 text-brand cursor-pointer" />
              </Link>
            </div>
      </div>
    </>
  );
};

export default InstructorCard;
