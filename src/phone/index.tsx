import React, { useRef } from "react";
import { ScreenContext } from "../context/screen-context";
import { Screen } from "../screen";
import "./index.css";

export const Phone: React.FC = () => {
  const lockscreenRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const homeScreenPagesRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const homeScreenRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <>
      <div className="notch"/>
      <div className="body-background"/>
      <div className="body">
        <ScreenContext.Provider value={{lockscreenRef, homeScreenRef, homeScreenPagesRef}}>
          <Screen/>
        </ScreenContext.Provider>
      </div>
    </>
  );
}
