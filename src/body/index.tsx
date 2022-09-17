import React, { useCallback, useState } from "react";
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
    <div
      className="phone-zone"
      onMouseMove={mouseTouchEnter}
      onMouseDown={() => {
        const touchElement = document.getElementById("touch");

        touchElement?.style.setProperty("background", "rgba(255, 255, 255, 0.9)");
        touchElement?.style.setProperty("width", "20px");
        touchElement?.style.setProperty("height", "20px");
      }}
      onMouseUp={() => {
        const touchElement = document.getElementById("touch");

        touchElement?.style.setProperty("background", "rgba(255, 255, 255, 0.5)");
        touchElement?.style.setProperty("width", "10px");
        touchElement?.style.setProperty("height", "10px");
      }}
    >
      <div className="touch" id="touch"/>
      <div className="notch"/>
      <div className="body-background"/>
      <div className="body">
        <Screen/>
      </div>
    </div>
  );
}
