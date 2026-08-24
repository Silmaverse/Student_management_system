import React from "react";

const Info = ({
  children1,
  children2,
  line = false,
  item,
  variant = "primary",
  broke = false,
  style,
}) => {
  const baseStyle = {
    fontSize: "62px",
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
        {broke ? (
          <>
            <span className="text-nowrap">{children1}</span>
            <span className="inline-block">{children2}</span>
            {line && (
              <div className="w-full h-0.5 absolute bottom-0 left-0 scale-x-0 bg-brand origin-left group-hover:scale-x-100 transition-transform delay-100 duration-300 ease-in-out cursor-pointer">

              </div>
            )}
          </>
        ) : (
          <>{children1}</>
        )}
      </Tag>
    </>
  );
};

export default Info;
