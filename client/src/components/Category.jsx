import React from "react";
import Info from "../utils/Info";
import CategoryCard from "../utils/CategoryCard";
import cpu from "../assets/Cpu.png";
import it from '../assets/it.png';
import android from "../assets/android.png";
import database from "../assets/database.png";
import automata from '../assets/automata.png';
import webdesign from '../assets/webdesign.png';
import basicIt from "../assets/basicIT.png";
import cod from "../assets/cod.png";
import embeded from '../assets/embeded.png';

const Category = () => {
  return (
    <>
      <section id="category">
        <div className="container">
            <Info
              item={"h2"}
              style={{
                fontSize: "40px",
                fontWeight: "600",
                fontFamily: "var(--font-brand)",
                textAlign: "center",
              }}
              children1={"Browse top category"}
            />
          <div className="flex flex-wrap justify-center gap-6 py-12">
            <CategoryCard
              imgsrc={cpu}
              bgColor={"bg-card1"}
              coursename={"Processors"}
              totalcourse={"63,476 Courses"}
            />
            <CategoryCard 
              imgsrc={it}
              bgColor={"bg-card2"}
              coursename={"IT & Software"}
              totalcourse={"63,476 Courses"}
            />
            <CategoryCard
              imgsrc={android}
              bgColor={'bg-white'}
              custom={"shadow-[0_8px_20px_rgba(0,0,0,0.15)]"}
              coursename={"Android Development"}
              totalcourse={"63,476 Courses"}
            />
            <CategoryCard
              imgsrc={database}
              bgColor={"bg-carddatabase"}
              coursename={"Databases"}
              totalcourse={"63,476 Courses"}
            /><CategoryCard
              imgsrc={automata}
              bgColor={"bg-embeded"}
              coursename={"Embeded System"}
              totalcourse={"63,476 Courses"}
            /><CategoryCard
              imgsrc={webdesign}
              bgColor={"bg-webdesign"}
              coursename={"Webdesign"}
              totalcourse={"63,476 Courses"}
            /><CategoryCard
              imgsrc={basicIt}
              bgColor={"bg-basicIt"}
              coursename={"Basic IT Course"}
              totalcourse={"63,476 Courses"}
            /><CategoryCard
              imgsrc={cod}
              bgColor={"bg-cod"}
              coursename={"COD"}
              totalcourse={"63,476 Courses"}
            />
            <CategoryCard
              imgsrc={cpu}
              bgColor={"bg-embeded"}
              coursename={"Automata"}
              totalcourse={"63,476 Courses"}
            />
            <CategoryCard
              imgsrc={cpu}
              bgColor={"bg-card1"}
              coursename={"Processors"}
              totalcourse={"63,476 Courses"}
            />
            <CategoryCard
              imgsrc={cpu}
              bgColor={"bg-card1"}
              coursename={"Processors"}
              totalcourse={"63,476 Courses"}
            />
            <CategoryCard
              imgsrc={cpu}
              bgColor={"bg-card1"}
              coursename={"Processors"}
              totalcourse={"63,476 Courses"}
            />
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Category;
