import React, { useCallback, useMemo, useRef } from "react";
import "./index.css";

export const useTouch = () => {
  const touchRef = useRef<HTMLDivElement>(null);

  const touchMouseEnter = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const touch = touchRef.current;

    const left = event.clientX;
    const top = event.clientY;

    const width = Number(touch?.offsetWidth);
    const height = Number(touch?.offsetHeight);

    touch?.style.setProperty("top", `${(top - height / 2).toString()}px`);
    touch?.style.setProperty("left", `${(left - width / 2).toString()}px`);
  }, []);

  const touchMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const touch = touchRef.current;

    touch?.style.setProperty("background", "rgba(255, 255, 255, 0.9)");
    touch?.style.setProperty("width", "20px");
    touch?.style.setProperty("height", "20px");
  }, []);

  const touchMouseUp = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const touch = touchRef.current;

    touch?.style.setProperty("background", "rgba(255, 255, 255, 0.5)");
    touch?.style.setProperty("width", "10px");
    touch?.style.setProperty("height", "10px");
  }, []);

  const Touch = useMemo(() => <div className="touch" ref={touchRef}/>, []);

  return {
    touchMouseEnter,
    touchMouseDown,
    touchMouseUp,
    Touch
  }
}
