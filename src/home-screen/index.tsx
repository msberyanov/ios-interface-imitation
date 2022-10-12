import React, { useContext, useState } from "react";
import moment from "moment";
import { IoCellular } from "react-icons/io5";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import { iconsProps } from "./icons-props";
import "./index.css";
import { ScreenContext } from "../context/screen-context";

const availablePages = 2;

export const HomeScreen: React.FC = () => {
  const {homeScreenPagesRef} = useContext(ScreenContext);

  const [pageNumber, setPageNumber] = useState(1);
  const [onTurn, setOnTurn] = useState(false);
  const [onTurnPageInitial, setOnTurnPageInitial] = useState(0);

  return (
    <div id="homescreen" className="homescreen">
      <div className="nav-bar">
        <div className="nav-operator">
          {moment().format("HH:mm")}
        </div>
        <div className="nav-notch"/>
        <div className="nav-icons">
          <IoCellular className="nav-icon"/>
          <IoIosWifi className="nav-icon"/>
          <IoIosBatteryFull className="nav-icon"/>
        </div>
      </div>

      <div
        className="homescreen-pages"
        ref={homeScreenPagesRef}
        onMouseDown={(event) => {
          homeScreenPagesRef.current?.style.setProperty("transition-duration", "0s");

          setOnTurn(true);
          setOnTurnPageInitial(event.clientX);
        }}
        onMouseMove={(event) => {
          if (onTurn) {
            const onTurnPageCoordinate = event.clientX - onTurnPageInitial;

            homeScreenPagesRef.current?.style.setProperty("transform", `translateX(${-(pageNumber - 1) * 270 + onTurnPageCoordinate}px)`);
          }
        }}
        onMouseUp={(event) => {
          const onTurnPageCoordinate = event.clientX - onTurnPageInitial;

          const homeScreenElement = document.getElementById("homescreen") as HTMLDivElement;
          const homeScreenElementRect = homeScreenElement.getBoundingClientRect();

          const homeScreenIconsZoneElement = document.getElementById(`homescreen-icons-zone-${pageNumber}`) as HTMLDivElement;
          const homeScreenPagesElementRect = homeScreenIconsZoneElement.getBoundingClientRect();

          const homeScreenPagesElement = homeScreenPagesRef.current as HTMLDivElement;
          homeScreenPagesElement.style.setProperty("transition-duration", "0.4s");

          if (onTurnPageCoordinate < 0) {
            if (homeScreenElementRect.left - homeScreenPagesElementRect.left > 70 && pageNumber + 1 <= availablePages) {
              homeScreenPagesElement.style.setProperty("transform", `translateX(-${(pageNumber) * 270}px)`);
              setPageNumber(prevPageNumber => prevPageNumber + 1);
            } else {
              homeScreenPagesElement.style.setProperty("transform", `translateX(-${(pageNumber - 1) * 270}px)`);
            }
          } else {
            if (homeScreenPagesElementRect.right - homeScreenElementRect.right > 70 && pageNumber - 1 >= 1) {
              homeScreenPagesElement.style.setProperty("transform", `translateX(-${(pageNumber - 2) * 270}px)`);
              setPageNumber(prevPageNumber => prevPageNumber - 1);
            } else {
              homeScreenPagesElement.style.setProperty("transform", `translateX(-${(pageNumber - 1) * 270}px)`);
            }
          }

          setOnTurn(false);
          setOnTurnPageInitial(event.clientX);
        }}
      >
        <div
          className="homescreen-icons-zone"
          id="homescreen-icons-zone-1"
        >
          {[...Array(14)].map((_, index) =>
            <div className="homescreen-icon-zone"
                 onAnimationEnd={event => (event.target as HTMLElement).style.setProperty("opacity", "1")}>
              <div className="homescreen-icon">
                <div className={`homescreen-icon-image ${iconsProps[index].type}`}/>
              </div>
              <div className="homescreen-icon-text">
                {iconsProps[index].name}
              </div>
            </div>
          )}
        </div>

        <div
          className="homescreen-icons-zone"
          id="homescreen-icons-zone-2"
        >
          {[...Array(10)].map((_, index) =>
            <div className="homescreen-icon-zone"
                 onAnimationEnd={event => (event.target as HTMLElement).style.setProperty("opacity", "1")}>
              <div className="homescreen-icon">
                <div className={`homescreen-icon-image ${iconsProps[index + 14].type}`}/>
              </div>
              <div className="homescreen-icon-text">
                {iconsProps[index + 14].name}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="homescreen-dots-zone">
        {[...Array(2)].map((_, index) =>
          <div className={index + 1 === pageNumber ? "homescreen-dot-active": "homescreen-dot-inactive"}/>)
        }
      </div>

      <div className="homescreen-dock-zone">
        <div className="homescreen-dock">
          <div className="homescreen-dock-icon phone"/>
          <div className="homescreen-dock-icon safari"/>
          <div className="homescreen-dock-icon message"/>
          <div className="homescreen-dock-icon music"/>
        </div>
      </div>
    </div>
  );
}
