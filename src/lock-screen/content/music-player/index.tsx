import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosVolumeHigh, IoIosVolumeMute } from "react-icons/io";
import "./index.css";

export const MusicPlayer: React.FC = () => {
  return (
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
  );
}
