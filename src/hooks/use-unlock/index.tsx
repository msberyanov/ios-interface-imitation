import React, { useCallback, useContext, useReducer } from "react";
import { ScreenContext } from "../../context/screen-context";
import { activateOnUnlock, deactivateOnUnlock, initialState, reducer, unlock } from "./unlock-actions";

export const useUnlock = () => {
  const {lockscreenRef} = useContext(ScreenContext);

  const [{onUnlock, onUnlockTop, unlocked}, dispatch] = useReducer(reducer, initialState);

  const onMouseUpUnlock = useCallback((event: React.MouseEvent) => {
    if (onUnlock) {
      const screenElement = lockscreenRef.current as HTMLDivElement;
      const onUnlockOffset = onUnlockTop - event.clientY;

      screenElement.style.setProperty("transition-duration", `.4s`);

      if (onUnlockOffset > 200) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(30px)`);
        screenElement.style.setProperty("transform", `translateY(-${520}px)`);

        dispatch(unlock());
      } else {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(0px)`);
        screenElement.style.setProperty("transform", `translateY(0px)`);
      }

      dispatch(deactivateOnUnlock());
    }
  }, [dispatch, onUnlock, onUnlockTop, lockscreenRef]);

  const onMouseMoveUnlock = useCallback((event: React.MouseEvent) => {
    if (onUnlock) {
      const onUnlockOffset = onUnlockTop - event.clientY;
      const screenElement = lockscreenRef.current as HTMLDivElement;

      screenElement.style.setProperty("transition-duration", `0s`);

      if (onUnlockOffset > 0) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(1px)`);
      }

      if (onUnlockOffset > 25) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(2px)`);
      }

      if (onUnlockOffset > 50) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(3px)`);
      }

      if (onUnlockOffset > 75) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(4px)`);
      }

      if (onUnlockOffset > 100) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(5px)`);
      }

      if (onUnlockOffset > 125) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(6px)`);
      }

      if (onUnlockOffset > 150) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(7px)`);
      }

      if (onUnlockOffset > 175) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(8px)`);
      }

      if (onUnlockOffset > 200) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(9px)`);
      }

      if (onUnlockOffset > 225) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(10px)`);
      }

      if (onUnlockOffset > 250) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(11px)`);
      }

      if (onUnlockOffset > 275) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(12px)`);
      }

      if (onUnlockOffset > 300) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(13px)`);
      }

      if (onUnlockOffset > 325) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(14px)`);
      }

      if (onUnlockOffset > 350) {
        screenElement.style.setProperty("-webkit-backdrop-filter", `blur(15px)`);
      }

      screenElement.style.setProperty("transform", `translateY(-${onUnlockOffset}px)`);
    }
  }, [onUnlock, onUnlockTop, lockscreenRef]);

  return (
    {
      state: {
        unlocked,
        onUnlock
      },
      dispatch,
      activateOnUnlock,
      deactivateOnUnlock,
      unlock,
      onMouseUpUnlock,
      onMouseMoveUnlock
    }
  );
}
