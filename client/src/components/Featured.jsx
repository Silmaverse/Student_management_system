import React from "react";
import FeaturedCourse from "../utils/FeaturedCourse";

const Featured = () => {
  return (
    <>
      <section id="featuredCourse" className="bg-white">
        {/* header */}
        <div className="w-full p-20">
          <div className="flex justify-between items-center pb-10">
            <h1 className="text-[40px] font-brand font-semibold text-primary">
              Our feature courses
            </h1>
            <p className="text-sm font-normal font-brand w-106">
              Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
              varius purus et eleifend porta.
            </p>
          </div>
          {/* course card */}
          <div className="flex flex-wrap gap-6">
          <FeaturedCourse/>
          <FeaturedCourse/>
          <FeaturedCourse/>
          <FeaturedCourse/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
