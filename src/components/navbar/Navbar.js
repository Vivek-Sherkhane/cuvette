import React from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="row navbar">
      <img src={logo} alt="logo.png" className="medium" />
      <div className="row profile">
        <img src={avatar} alt="avatar" className="small" />
        <p>Siddharth Jain</p>
      </div>
    </div>
  );
}

export default Navbar;
