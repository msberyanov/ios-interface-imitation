import React from "react";
import { MusicPlayer } from "./music-player";
import { Clock } from "./clock";
import { ControlButtons } from "./control-buttons";
import { Swipe } from "./swipe";
import { ControlPanel } from "./control-panel";
import "./index.css";

export const LockscreenContent: React.FC = () => {
  return (
    <>
      <div className="content">
        <div className="lockscreen-content">
          <ControlPanel/>
          <Clock/>
          <MusicPlayer/>
          <ControlButtons/>
        </div>
      </div>

      <Swipe/>
    </>
  );
}
