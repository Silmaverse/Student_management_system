import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import apple from "../../assets/appleplaystore.png";
import android from "../../assets/androidplaystore.png";
import Info from "../../utils/Info";
import NavItem from "../../utils/NavItem";

const Footerlist = () => {
  return (
    <div className="flex gap-6 items-start">
      {/* Footer list start from second part */}
      <div className="second">
        <Info
          item={"h3"}
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#fff",
            paddingBottom: "14px",
          }}
          children1={"Top 4 Category"}
        />
        <ul className="space-y-6">
          <Info
            item={"li"}
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
            }}
            children1={"Development"}
          />
          <Info
            item={"li"}
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
            }}
            children1={"Finance & Accounting"}
          />
          <Info
            item={"li"}
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
            }}
            children1={"Design"}
          />
          <Info
            item={"li"}
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "var(--color-fivenary)",
            }}
            children1={"Business"}
          />
        </ul>
      </div>
      {/* Footer list third part */}
      <div className="third">
        <Info
          item={"h3"}
          style={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#fff",
            paddingBottom: "14px",
          }}
          children1={"Quick Links"}
        />
        <ul className="space-y-6 flex flex-col">
          <NavItem
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "var(--color-fivenary)",
              fontFamily: "var(--font-brand)",
              display: "inline-flex",
              width: "fit-content",
              gap: "1px",
              position: "relative",
            }}
            userstyle={false}
            children={"About"}
            arrowstyle={true}
            children2={
              <IoIosArrowRoundForward className="size-6 text-white cursor-pointer" />
            }
            line={false}
            children3={true}
          />

          <NavItem
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "var(--color-fivenary)",
              fontFamily: "var(--font-brand)",
              display: "inline-flex",
              width: "fit-content",
              gap: "1px",
              position: "relative",
            }}
            userstyle={false}
            children={"Become Instructor"}
            arrowstyle={true}
            children2={
              <IoIosArrowRoundForward className="size-6 text-white cursor-pointer" />
            }
            line={false}
            children3={true}
          />
          <NavItem
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
              display: "inline-flex",
              width: "fit-content",
              gap: "1px",
              position: "relative",
            }}
            userstyle={false}
            children={"Contact"}
            arrowstyle={true}
            children2={
              <IoIosArrowRoundForward className="size-6 text-white cursor-pointer" />
            }
            line={false}
            children3={true}
          />
          <NavItem
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
              display: "inline-flex",
              width: "fit-content",
              gap: "1px",
              position: "relative",
            }}
            userstyle={false}
            children={"Career"}
            arrowstyle={true}
            children2={
              <IoIosArrowRoundForward className="size-6 text-white cursor-pointer" />
            }
            line={false}
            children3={true}
          />
        </ul>
      </div>
      {/* Footer list fourth part */}
      <div className="fourth">
        <Info
          item={"h3"}
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#fff",
            paddingBottom: "14px",
          }}
          children1={"Support"}
        />
        <ul className="space-y-6">
          <NavItem
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
            }}
            children={"Help Center"}
            line={false}
            userstyle={false}
          />
          <NavItem
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
            }}
            children={"FAQs"}
            line={false}
            userstyle={false}
          />
          <NavItem
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
            }}
            children={"Terms & Condition"}
            line={false}
            userstyle={false}
          />
          <NavItem
            style={{
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "var(--font-brand)",
              color: "var(--color-fivenary)",
            }}
            children={"Privacy Policy"}
            line={false}
            userstyle={false}
          />
          
        </ul>
      </div>
      {/* Footer list fifth part */}
      <div className="fivth">
        <h3 className="text-[14px] font-brand font-medium text-white pb-5">
          Downlaod our app
        </h3>
        <div className="playstore flex flex-col gap-3">
          <div className="apple">
            <img src={apple} />
          </div>
          <div className="android">
            <img src={android} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerlist;
