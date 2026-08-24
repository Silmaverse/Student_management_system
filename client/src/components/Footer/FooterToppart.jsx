import Info from "../../utils/Info";
import { Link } from "react-router";
import Button from "../../utils/Button";

const FooterToppart = () => {
  return (
    <>
      <div className="toppart border-b border-b-[#9b9da3 ] flex gap-34 justify-center items-center">
        <div className="left">
          <Info
            item={"h1"}
            style={{
              width: "536px",
              fontFamily: "var(--font-brand)",
              fontSize: "40px",
              color: "#fff",
              fontWeight: "600",
            }}
            children1={"Start learning with 67.1k students around the world."}
          />
          <div className="btn pt-7.5 pb-25 flex gap-4 items-center">
            <a
              target="_blank"
              className="text-[16px] font-semibold font-brand w-42 h-12 flex justify-center items-center bg-brand text-white"
            >
              Join the Family
            </a>
            <Link style={{textDecoration:"none"}}>
              <Button
                children={"Browse all courses"}
                style={{
                  fontSize: "16px",
                  width: "168px",
                  height: "48px",
                  color: "#fff",
                  backgroundColor:"var(--color-footericon)",
                  fontWeight:"600"
                }}
              />
            </Link>
          </div>
        </div>
        <div className="right flex gap-6 items-center">
          <div className="txt1">
            <Info item={"h1"} style={{fontSize:"40px",fontWeight:"600",color:"#ffff"}} children1={"6.3k"}/>
            <Info item={"p"} style={{fontSize:"16px",fontWeight:"500",color:"var(--color-ternary)"}} children1={"Online courses"}/>
          </div>
          <div className="txt2">
             <Info item={"h1"} style={{fontSize:"40px",fontWeight:"600",color:"#ffff"}} children1={"26k"}/>
            <Info item={"p"} style={{fontSize:"16px",fontWeight:"500",color:"var(--color-ternary)"}} children1={"Certified Instructor"}/>
          </div>
          <div className="txt3">
             <Info item={"h1"} style={{fontSize:"40px",fontWeight:"600",color:"#ffff"}} children1={"99.9%"}/>
            <Info item={"p"} style={{fontSize:"16px",fontWeight:"500",color:"var(--color-ternary)"}} children1={"Sucess Rate"}/>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterToppart;
