import React from "react";
import moment from "moment";
import "./index.css";

export const Clock: React.FC = () => {
  return (
    <>
      <div className="date">
        {moment().format("dddd, MMMM D")}
      </div>
      <div className="clock">
        {moment().format("HH:mm")}
      </div>
    </>
  );
}
