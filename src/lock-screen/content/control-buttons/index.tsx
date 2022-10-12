import React from "react";
import { IoIosCamera, IoIosFlashlight } from "react-icons/io";
import "./index.css";

export const ControlButtons: React.FC = () => {
  return (
    <div className="control-buttons-zone">
      <div className="control-button-zone">
        <div className="control-button">
          <IoIosFlashlight className="control-icon"/>
        </div>
      </div>

      <div className="control-button-zone"/>

      <div className="control-button-zone">
        <div className="control-button">
          <IoIosCamera className="control-icon"/>
        </div>
      </div>
    </div>
  );
}
