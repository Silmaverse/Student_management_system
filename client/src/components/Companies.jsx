import React from 'react'
import Info from '../utils/Info'
import netflix from "../assets/netflix.png";
import youtube from "../assets/youtube.png";
import google from "../assets/google.png";
import microsoft from "../assets/micrsoft.png";
import lenovo from "../assets/lenovo.png";
import slack  from "../assets/slack.png";

const Companies = () => {
  return (
    <>
    <section id='company' className="pb-20 pt-115.5 ">
        <div className="conatiner px-20">
            {/* layout Structure */}
            <div className="flex gap-8 justify-center items-center">
                {/* left section */}
                <div className="left">
                    <Info style={{fontSize:"32px",fontWeight:"600"}}  item={"h1"} children1={"6.3k trusted companies"}/>
                    <Info style={{fontSize:"14px",fontWeight:"400",color:"#6E7485",width:'312px',paddingTop:"24px"}}  item={"h1"} children1={"Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra."}/>
                </div>
                {/* Right section trusted compnaies boxes */}
                <div className="right flex flex-wrap w-180 items-center gap-6">
                    <div className="w-50 h-25 shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-center items-center">
                        <img src={netflix} alt='error' />
                    </div>
                    <div className="w-50 h-25 shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-center items-center">
                        <img src={youtube} alt='error' />
                    </div>
                    <div className="w-50 h-25 shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-center items-center">
                        <img src={google} alt='error' />
                    </div>
                    <div className="w-50 h-25 shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-center items-center">
                        <img src={microsoft} alt='error' />
                    </div>
                    <div className="w-50 h-25 shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-center items-center">
                        <img src={lenovo} alt='error' />
                    </div>
                    <div className="w-50 h-25 shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-center items-center">
                        <img src={slack} alt='error' />
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Companies