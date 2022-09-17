import React, { useCallback, useReducer } from "react";

const initialState = {
  onUnlock: false,
  onUnlockTop: 0,
  unlocked: false
};

export type UNLOCK_ACTION_TYPE =
  | { type: "activate"; payload: number }
  | { type: "deactivate"; }
  | { type: "unlock"; };

const reducer = (state: typeof initialState, action: UNLOCK_ACTION_TYPE) => {
  switch (action.type) {
    case "activate":
      return {
        onUnlock: true,
        onUnlockTop: action.payload,
        unlocked: false
      };
    case "deactivate":
      return {
        ...initialState,
        unlocked: state.unlocked
      };
    case "unlock":
      return {
        ...initialState,
        unlocked: true
      };
  }
}

const activateOnUnlock = (payload: number): UNLOCK_ACTION_TYPE => (
  {
    type: "activate",
    payload: payload
  }
);

const deactivateOnUnlock = (): UNLOCK_ACTION_TYPE => (
  {
    type: "deactivate",
  }
);

const unlock = (): UNLOCK_ACTION_TYPE => (
  {
    type: "unlock",
  }
);

export const useUnlock = () => {
  const [{onUnlock, onUnlockTop, unlocked}, dispatch] = useReducer(reducer, initialState);

  const onMouseUpOnUnlock = useCallback((event: React.MouseEvent) => {
    if (onUnlock) {
      const screenElement = document.getElementById("lockscreen") as HTMLDivElement;
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
  }, [dispatch, onUnlock, onUnlockTop]);

  const onMouseMoveUnlock = useCallback((event: React.MouseEvent) => {
    if (onUnlock) {
      const onUnlockOffset = onUnlockTop - event.clientY;
      const screenElement = document.getElementById("lockscreen") as HTMLDivElement;

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
  }, [onUnlock, onUnlockTop]);

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
      onMouseUpOnUnlock,
      onMouseMoveUnlock
    }
  );
}
