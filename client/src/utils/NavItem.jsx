import React, { Children, useState } from "react";

const NavItem = ({
  children,
  children2,
  children3,
  arrowstyle = false,
  userstyle = true,
  style,
  line = true,
}) => {
  const [ishovered, setIshovered] = useState(false);

  const listStyle = userstyle
    ? {
        position: "relative",
        cursor: "pointer",
        color: ishovered ? "#fff" : "var(--color-fivenary)",
        transition: "color 300ms ease-in-out",
      }
    : { cursor: "pointer", color: "var(--color-fivenary)" };

  const lineStyle = {
    position: "absolute",
    top: "-16px",
    left: "0px",
    width: "100%",
    height: "2px",
    backgroundColor: "var(--color-brand)",
    transformOrigin: "left",
    transform: ishovered ? "scaleX(1)" : "scaleX(0)",
    transition: "transform 350ms  ease-in-out",
  };

  const arrowStyle = {
    transform: ishovered ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 300ms ease-in-out",
  };

  return (
    <>
      <li
        style={{ ...listStyle, ...style }}
        onMouseEnter={() => setIshovered(true)}
        onMouseLeave={() => setIshovered(false)}
      >
        {children}
        {arrowstyle ? (
          <span style={arrowStyle}>{children2}</span>
        ) : (
          <>{children2}</>
        )}
        {line && <div style={lineStyle}></div>}
        {children3 && (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "2px",
              backgroundColor: "var(--color-brand)",
              transformOrigin: "left",
              transform: ishovered ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 350ms ease-in-out",
            }}
          />
        )}
      </li>
    </>
  );
};

export default NavItem;
