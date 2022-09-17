import { IoCellular } from "react-icons/io5";
import { IoIosBatteryFull, IoIosCamera, IoIosFlashlight, IoIosVolumeHigh, IoIosVolumeMute, IoIosWifi } from "react-icons/io";
import moment from "moment";
import { FaPlay } from "react-icons/fa";
import React from "react";
import { UNLOCK_ACTION_TYPE } from "../hooks/use-unlock";

interface LockScreenProps  {
  unlocked: boolean,
  onUnlock: boolean,
  dispatch: React.Dispatch<UNLOCK_ACTION_TYPE>,
  activateOnUnlock: (payload: number) => UNLOCK_ACTION_TYPE
}

export const LockScreen: React.FC<LockScreenProps> = ({
  unlocked,
  onUnlock,
  dispatch,
  activateOnUnlock
}) => {
  return (
    <div className="lockscreen" id="lockscreen">
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
    </div>
  )
}
