import React from "react";

const Info = ({ children1,children2, item, variant = "primary", broke,style }) => {
  const baseStyle = {
    fontSize: "62px",
    lineHeight: "74px",
    letterSpacing: "-0.02em",
    fontWeight: "600",
    fontFamily: "var(--font-brand)",
    
  };

  const variantStyles = {
    primary: { color: "var(--color-primary)" },
    secondary: { color: "var(--color-secondary)" },
  };
  const Tag = item;

  return (
    <>
      <Tag style={{ ...baseStyle, ...variantStyles[variant], ...style }}>
        {broke?
        <>
        <span className="text-nowrap">{children1}</span>
        <span className="inline-block">{children2}</span>  
        </>:
        < >{children1}</>
        }
      </Tag>
    </>
  );
};

export default Info;
