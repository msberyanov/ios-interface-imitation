import moment from "moment";
import { IoCellular } from "react-icons/io5";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import React from "react";

export const NavBar: React.FC = () => {
  return (
    <div className="nav-bar">
      <div className="nav-operator">
        {moment().format("HH:mm")}
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
