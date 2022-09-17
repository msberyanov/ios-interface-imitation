import React from "react";
import "./index.css";
import { IoCellular, } from "react-icons/io5";
import { IoIosBatteryFull, IoIosCamera, IoIosFlashlight, IoIosVolumeHigh, IoIosVolumeMute, IoIosWifi } from "react-icons/io";
import moment from "moment";
import { FaPlay } from "react-icons/fa";
import { useUnlock } from "../hooks/use-unlock";
import { HomeScreen } from "../home-screen";
import { LockScreen } from "../lock-screen";

export const Screen: React.FC = () => {
  const {
    state: {onUnlock, unlocked},
    dispatch,
    activateOnUnlock,
    onMouseUpOnUnlock,
    onMouseMoveUnlock
  } = useUnlock();

  return (
    <div
      className="screen-background"
      onMouseUp={onMouseUpOnUnlock}
      onMouseMove={onMouseMoveUnlock}>

      {unlocked && <HomeScreen/>}

      <LockScreen
        unlocked={unlocked}
        onUnlock={onUnlock}
        dispatch={dispatch}
        activateOnUnlock={activateOnUnlock}
      />
    </div>
  );
}
