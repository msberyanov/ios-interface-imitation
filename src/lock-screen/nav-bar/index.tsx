import React from "react";
import { IoCellular } from "react-icons/io5";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import "./index.css";

export const LockScreenNavBar : React.FC = () => {
  return (
    <div className="nav-bar">
      <div className="nav-operator">
        T-Mobile
      </div>
      <div className="nav-notch"/>
      <div className="nav-icons">
        <IoCellular className="nav-icon"/>
        <IoIosWifi className="nav-icon"/>
        <IoIosBatteryFull className="nav-icon"/>
      </div>
    </div>
  );
}
