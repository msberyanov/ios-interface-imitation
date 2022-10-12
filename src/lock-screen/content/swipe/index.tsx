import React, { useContext } from "react";
import "./index.css";
import { LockScreenContext } from "../../../context/lockscreen-context";

export const Swipe: React.FC = () => {
  const {unlocked, onUnlock, activateOnUnlock, dispatch} = useContext(LockScreenContext);

  return (
    <>
      <div className="swipe-message" style={{opacity: onUnlock || unlocked ? 0 : 1}}>
        Swipe up to open
      </div>

      <div
        className="swipe-gesture"
        onMouseDown={(event) => dispatch(activateOnUnlock(event.clientY))}
      >
        <div className="gesture-icon">
        </div>
      </div>
    </>
  );
}
