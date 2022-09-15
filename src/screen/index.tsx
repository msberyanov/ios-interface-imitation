import React, { useReducer, useState } from "react";
import "./index.css";
import { IoCellular, } from "react-icons/io5";
import { IoIosBatteryFull, IoIosCamera, IoIosFlashlight, IoIosVolumeHigh, IoIosVolumeMute, IoIosWifi } from "react-icons/io";
import moment from "moment";
import { FaPlay } from "react-icons/fa";

const initialState = {
  onUnlock: false,
  onUnlockTop: 0
};

type ACTION_TYPE =
  | { type: "activate"; payload: number }
  | { type: "deactivate"; };

const reducer = (state: typeof initialState, action: ACTION_TYPE) => {
  switch (action.type) {
    case "activate":
      return {
        onUnlock: true,
        onUnlockTop: action.payload
      };
    case "deactivate":
      return initialState;
  }
}

const activateOnUnlock = (payload: number) : ACTION_TYPE => (
  {
    type: "activate",
    payload: payload
  }
);

const deactivateOnUnlock = () : ACTION_TYPE => (
  {
    type: "deactivate",
  }
);

export const Screen: React.FC = () => {
  const [{onUnlock, onUnlockTop}, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="screen-background">
      <div className="screen" id="screen">
        <div className="nav-bar">
          <div className="nav-operator">
            T-Mobile
          </div>
          <div className="nav-notch"/>
          <div className="nav-icons">
            <IoCellular className="nav-icon"/>
            <IoIosWifi className="nav-icon"/>
            <IoIosBatteryFull className="nav-icon"/>
          </div>
        </div>

        <div className="content">
          <div className="lockscreen-content">
            <div className="control-panel">
              <div className="control-panel-icon"/>
            </div>

            <div className="date">
              {moment().format("dddd, MMMM D")}
            </div>
            <div className="clock">
              {moment().format("HH:mm")}
            </div>

            <div className="music-player-zone">
              <div className="music-player">
                <div className="music-meta-zone">
                  <div className="music-avatar">
                    <div className="avatar"/>
                  </div>
                  <div className="music-info">
                    <div className="music-album">Хиона - Single</div>
                    <div className="music-name">Хиона</div>
                    <div className="music-author">ЛСП</div>
                  </div>
                </div>

                <div className="music-control-zone">
                  <div className="music-control">
                    0:20
                  </div>
                  <div className="music-track-zone">
                    <div className="music-track-playing"/>
                    <div className="music-track"/>
                  </div>
                  <div className="music-control">
                    3:06
                  </div>
                </div>

                <div className="music-play-zone">
                  <div className="music-play-control">
                    <FaPlay className="music-prev-play-control"/>
                    <FaPlay className="music-prev-play-control"/>
                  </div>
                  <div className="music-play-control">
                    <FaPlay/>
                  </div>
                  <div className="music-play-control">
                    <FaPlay className="music-next-play-control"/>
                    <FaPlay className="music-next-play-control"/>
                  </div>
                </div>

                <div className="music-sound-zone">
                  <div className="music-sound-label">
                    <IoIosVolumeMute/>
                  </div>

                  <div className="music-sound-control-zone">
                    <div className="music-sound-control"/>
                  </div>
                  <div className="music-sound-label">
                    <IoIosVolumeHigh/>
                  </div>
                </div>
              </div>
            </div>

            <div className="control-buttons-zone">
              <div className="control-button-zone">
                <div className="control-button">
                  <IoIosFlashlight className="control-icon"/>
                </div>
              </div>

              <div className="control-button-zone"/>

              <div className="control-button-zone">
                <div className="control-button">
                  <IoIosCamera className="control-icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swipe-gesture"
          onMouseDown={(event) => {
            console.log("wt")
            dispatch(activateOnUnlock(event.clientY));
          }}
          onMouseUp={() => dispatch(deactivateOnUnlock())}
          onMouseMove={(event) => {
            if (onUnlock) {
              const onUnlockOffset = onUnlockTop - event.clientY;
              const screenElement = document.getElementById("screen") as HTMLDivElement;

              if (onUnlockOffset > 0) {
                screenElement.style.setProperty("-webkit-backdrop-filter", `blur(2px)`);
              }

              if (onUnlockOffset > 50) {
                screenElement.style.setProperty("-webkit-backdrop-filter", `blur(3px)`);
              }

              if (onUnlockOffset > 100) {
                screenElement.style.setProperty("-webkit-backdrop-filter", `blur(4px)`);
              }

              if (onUnlockOffset > 150) {
                screenElement.style.setProperty("-webkit-backdrop-filter", `blur(5px)`);
              }

              if (onUnlockOffset > 200) {
                screenElement.style.setProperty("-webkit-backdrop-filter", `blur(6px)`);
              }

              if (onUnlockOffset > 250) {
                screenElement.style.setProperty("-webkit-backdrop-filter", `blur(7px)`);
              }

              if (onUnlockOffset > 300) {
                screenElement.style.setProperty("-webkit-backdrop-filter", `blur(8px)`);
              }

              screenElement.style.setProperty("transform", `translateY(-${onUnlockOffset}px)`);
            }
          }}
        >
          <div className="gesture-icon">
          </div>
        </div>
      </div>
    </div>
  );
}
