import React from "react";
import "./index.css"
import { useTouch } from "../hooks/use-touch";
import { Phone } from "../phone";

export const PhoneZone: React.FC = () => {
  const {
    touchMouseEnter,
    touchMouseDown,
    touchMouseUp,
    Touch
  } = useTouch();

  return (
    <div
      className="phone-zone"
      onMouseMove={touchMouseEnter}
      onMouseDown={touchMouseDown}
      onMouseUp={touchMouseUp}
    >
      {Touch}
      <Phone/>
    </div>
  );
}
