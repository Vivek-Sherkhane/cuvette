import React, { useEffect } from "react";

function Progressbar({ item }) {
  const { bgColor, completed, text } = item;

  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName(
        `${bgColor}`
      )[0].style.width = `${completed}%`;
    }, 500);
  }, [bgColor]);

  const containerStyles = {
    position: "relative",
    height: 10,
    width: "80%",
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: "0",
    backgroundColor: bgColor,
    position: "absolute",
    zIndex: "1",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    color: bgColor,
    fontWeight: 400,
  };

  return (
    <div>
      <p style={{ margin: "2% 0" }}>{text}</p>
      <div className="row">
        <div style={containerStyles}>
          <div style={fillerStyles} className={`${bgColor}`}></div>
        </div>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
}

export default Progressbar;
