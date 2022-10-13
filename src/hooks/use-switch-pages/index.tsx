import React, { useCallback, useContext, useReducer } from "react";
import { ScreenContext } from "../../context/screen-context";
import { activateOnSwitch, deactivateOnSwitch, initialState, proceedSwitch, reducer } from "./switch-actions";

const availablePages = 2;

export const useSwitchPages = () => {
  const {homeScreenPagesRef, homeScreenRef} = useContext(ScreenContext);

  const [{onTurn, onTurnPageInitial, pageNumber}, dispatch] = useReducer(reducer, initialState);

  const homeScreenPagesMouseDown = useCallback((event: React.MouseEvent) => {
    homeScreenPagesRef.current?.style.setProperty("transition-duration", "0s");

    dispatch(activateOnSwitch(event.clientX));
  }, [homeScreenPagesRef]);

  const homeScreenPagesMouseMove = useCallback((event: React.MouseEvent) => {
    if (onTurn) {
      const onTurnPageCoordinate = event.clientX - onTurnPageInitial;

      homeScreenPagesRef.current?.style.setProperty("transform", `translateX(${-(pageNumber - 1) * 270 + onTurnPageCoordinate}px)`);
    }
  }, [homeScreenPagesRef, onTurn, onTurnPageInitial, pageNumber]);

  const homeScreenPagesMouseUp = useCallback((event: React.MouseEvent) => {
    const onTurnPageCoordinate = event.clientX - onTurnPageInitial;

    const homeScreenElement = homeScreenRef.current as HTMLDivElement;
    const homeScreenElementRect = homeScreenElement.getBoundingClientRect();

    const homeScreenIconsZoneElement = document.getElementById(`homescreen-icons-zone-${pageNumber}`) as HTMLDivElement;
    const homeScreenPagesElementRect = homeScreenIconsZoneElement.getBoundingClientRect();

    const homeScreenPagesElement = homeScreenPagesRef.current as HTMLDivElement;
    homeScreenPagesElement.style.setProperty("transition-duration", "0.4s");

    if (onTurnPageCoordinate < 0) {
      if (homeScreenElementRect.left - homeScreenPagesElementRect.left > 70 && pageNumber + 1 <= availablePages) {
        homeScreenPagesElement.style.setProperty("transform", `translateX(-${(pageNumber) * 270}px)`);

        dispatch(proceedSwitch(true));
      } else {
        homeScreenPagesElement.style.setProperty("transform", `translateX(-${(pageNumber - 1) * 270}px)`);
      }
    } else {
      if (homeScreenPagesElementRect.right - homeScreenElementRect.right > 70 && pageNumber - 1 >= 1) {
        homeScreenPagesElement.style.setProperty("transform", `translateX(-${(pageNumber - 2) * 270}px)`);

        dispatch(proceedSwitch(false));
      } else {
        homeScreenPagesElement.style.setProperty("transform", `translateX(-${(pageNumber - 1) * 270}px)`);
      }
    }

    dispatch(deactivateOnSwitch(event.clientX));
  }, [homeScreenPagesRef, homeScreenRef, onTurnPageInitial, pageNumber]);

  return {
    pageNumber,
    homeScreenPagesMouseDown,
    homeScreenPagesMouseMove,
    homeScreenPagesMouseUp
  }
}
