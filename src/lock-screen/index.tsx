import React, { useContext } from "react";
import "./index.css";
import { ScreenContext } from "../context/screen-context";
import { LockScreenNavBar } from "./nav-bar";
import { LockscreenContent } from "./content";

export const LockScreen: React.FC = () => {
  const {lockscreenRef} = useContext(ScreenContext);

  return (
    <div className="lockscreen" ref={lockscreenRef}>
      <LockScreenNavBar/>
      <LockscreenContent/>
    </div>
  )
}
