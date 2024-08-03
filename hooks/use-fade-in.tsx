"use client";
import { useState, useEffect } from "react";

export const useFadeIn = ({
  delay = 0,
  duration = 1,
  easing = "ease-in-out",
}) => {
  const [style, setStyle] = useState({
    opacity: 0,
    transition: `opacity ${duration}s ${easing} ${delay}s`,
  });

  useEffect(() => {
    setTimeout(() => {
      setStyle((prevStyle) => ({ ...prevStyle, opacity: 1 }));
    }, 0);
  }, []);

  return style;
};

export default useFadeIn;
