import React, { useContext } from "react";
import { iconsProps } from "./icons-props";
import "./index.css";
import { ScreenContext } from "../context/screen-context";
import { NavBar } from "./nav-bar";
import { useSwitchPages } from "../hooks/use-switch-pages";

export const HomeScreen: React.FC = () => {
  const {
    pageNumber,
    homeScreenPagesMouseDown,
    homeScreenPagesMouseMove,
    homeScreenPagesMouseUp
  } = useSwitchPages();

  const {homeScreenPagesRef, homeScreenRef} = useContext(ScreenContext);

  return (
    <div className="homescreen" ref={homeScreenRef}>
      <NavBar/>
      <div
        className="homescreen-pages"
        ref={homeScreenPagesRef}
        onMouseDown={homeScreenPagesMouseDown}
        onMouseMove={homeScreenPagesMouseMove}
        onMouseUp={homeScreenPagesMouseUp}
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
          <div className={index + 1 === pageNumber ? "homescreen-dot-active" : "homescreen-dot-inactive"}/>)
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
