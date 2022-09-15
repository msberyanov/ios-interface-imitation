import React, { useCallback } from "react";
import "./index.css"
import { Screen } from "../screen";

export const Body: React.FC = () => {
  const mouseTouchEnter = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const left = event.clientX;
    const top = event.clientY;

    const mouseTouch = document.getElementById("touch");
    const width = Number(mouseTouch?.offsetWidth);
    const height = Number(mouseTouch?.offsetHeight);

    mouseTouch?.style.setProperty("top", `${(top - height / 2).toString()}px`);
    mouseTouch?.style.setProperty("left", `${(left - width / 2).toString()}px`);
  }, []);

  return (
    <div className="phone-zone" onMouseMove={mouseTouchEnter}>
      <div className="touch" id="touch"/>
      <div className="notch"/>
      <div className="body">
       <Screen/>
      </div>
    </div>
  );
}
