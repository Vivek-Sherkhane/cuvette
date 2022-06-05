import React from "react";
import "./sidebar.css";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <BarChartRoundedIcon style={{ marginRight: "1.2rem" }} />
        <h2 style={{ fontWeight: "lighter" }}>Dashboard</h2>
      </div>
      <div className="sidebarItem active">
        <LocalPoliceOutlinedIcon style={{ marginRight: "1.2rem" }} />
        <h2 style={{ fontWeight: "lighter" }}>Skill Test</h2>
      </div>
      <div className="sidebarItem">
        <InsertDriveFileOutlinedIcon style={{ marginRight: "1.2rem" }} />
        <h2 style={{ fontWeight: "lighter" }}>Internships</h2>
      </div>
    </div>
  );
}

export default Sidebar;
