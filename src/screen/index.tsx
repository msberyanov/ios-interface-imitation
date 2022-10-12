import React from "react";
import "./index.css";
import { useUnlock } from "../hooks/use-unlock";
import { HomeScreen } from "../home-screen";
import { LockScreen } from "../lock-screen";
import { LockScreenContext } from "../context/lockscreen-context";

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

      <LockScreenContext.Provider value={{unlocked, onUnlock, activateOnUnlock, dispatch}}>
        <LockScreen/>
      </LockScreenContext.Provider>
    </div>
  );
}
