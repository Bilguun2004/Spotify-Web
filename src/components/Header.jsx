import "../styles/Leftbar.scss";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import burger from "../assets/burger.png";
import close from "../assets/close.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header-container">
      <div className="Header-container-1">
        <img className="hover" src={left} />
        <img className="hover" src={right} />
      </div>
      <div className="Header-container-2-2">
        <div className="Header-container-2">
          <span className="Header-container-2-text">PREMIUM</span>
          <span className="Header-container-2-text">SUPPORT</span>
          <span className="Header-container-2-text">DOWNLOAD</span>
        </div>
        <span className="Header-container-2-vertical-line"></span>
        <div className="Header-container-2-1">
          <Link className="Header-container-2-text" to={'/register'}>
            <span style={{textDecoration:'none'}}>SIGN UP</span>
          </Link>
          <Link to={'/login'}>
          <div className="Header-container-butt-con">
            <span style={{textDecoration:'none'}} className="Header-container-button">LOG IN</span>
          </div>
          </Link>
          
          <div>
            <div className="Header-container-burger">
              <img
                className="Header-container-burger-bar"
                src={burger}
                height="15px"
              />
              <img
                className="Header-container-burger-close"
                src={close}
                height="18px"
              />
            </div>
            <div className="Header-container-burger-modal">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
