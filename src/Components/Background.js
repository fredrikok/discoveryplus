import React, { useState, useEffect } from "react";

function Background({ activeGenre = "For deg" }) {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const div = document.getElementById("background-div");
    if (div) {
      div.style.opacity = 1;
      div.style.filter = `blur(0)`;
      div.style.backgroundImage = `url(${backgroundImage})`;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const blur = Math.min(scrollTop / 20, 10);
      const opacity = 1 - Math.min(scrollTop / 1000, 1);
      div.style.opacity = opacity.toString();
      div.style.filter = `blur(${blur}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundImage]);

  return <></>;
}

export default Background;
