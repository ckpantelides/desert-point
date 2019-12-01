//import React from "react";
import React, { useState } from "react";

// Used for changing navbar background based on window position
import useWindowScrollPosition from "@rehooks/window-scroll-position";

// NavBackground used to change navbar background from transparent on scroll
function NavBackground() {
  const [change, setChange] = useState(false);
  const changePosition = 300;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "#333" : "transparent",
    transition: "400ms ease",
    height: "48px",
    position: "fixed",
    right: 0,
    left: 0,
    top: 0
  };

  return <div style={style}></div>;
}

export default NavBackground;
