import React, { RefObject } from "react";

export interface ScreenContextProps {
  lockscreenRef: RefObject<HTMLDivElement>;
  homeScreenPagesRef: RefObject<HTMLDivElement>;
}

export const emptyScreenContext : ScreenContextProps = {
  lockscreenRef: {} as RefObject<HTMLDivElement>,
  homeScreenPagesRef: {} as RefObject<HTMLDivElement>,
}

export const ScreenContext = React.createContext<ScreenContextProps>(emptyScreenContext);
