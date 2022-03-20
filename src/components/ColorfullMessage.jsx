import React from "react";

export const ColorfullMessage = (props) => {
  console.log("カラフル");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: '18px'
  };
  return (
    <p style={contentStyle}>{children}</p>
  );
}

// export default ColorfullMessage;
