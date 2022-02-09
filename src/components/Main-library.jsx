import "../styles/MainLibrary.scss";
import { useState } from "react";
const MainLibrary = () => {
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => {
    setoffsetY(window.pageYOffset);
  };

  return (
    <div className="MainLibrary">
      <div
        className="MainLibrary-header"
        className="a"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className="box"></div>
      </div>
      <div className="a"></div>
    </div>
  );
};
export default MainLibrary;
