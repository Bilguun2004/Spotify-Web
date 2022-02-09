import Home from "./Home";
import Leftbar from "./Leftbar";
import Main from "./Main"
import "../styles/Leftbar.scss";
import Logo from "../assets/logo.svg";
import Search from "../assets/search.svg";
import Libraryy from "../assets/Library.svg";
import Homee from "../assets/Home.svg";
import plus from "../assets/plus.svg";
import heart from "../assets/heart.svg";
import Footer from "./Footer";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import Header from "./Header";
import MainLibrary from "./Main-library"
 const Library = () =>{
     return(
        <div className="Big-container">
        <div className="Container">
          <img src={Logo} height={"37px"} />
          <div className="Container-top">
            <span className="Container-top-item">
              <img src={Homee} height="18px" />
              <span>Home</span>
            </span>
            <span className="Container-top-item">
              <img src={Search} />
              <span>Search</span>
            </span>
            <span className="Container-top-item">
              <img src={Libraryy} />
              <span>Your library</span>
            </span>
          </div>
          <div className="Container-mid">
            <span className="Container-mid-item">
              <span className="Container-mid-item-1">
                <img src={plus} height="8px" />
              </span>
              <span>Create Playlist</span>
            </span>
            <span className="Container-mid-item">
              <span className="Container-mid-item-2">
                <img src={heart} height="10px" />
              </span>
              <span>Liked Songs</span>
            </span>
          </div>
        </div>
        <div className="Big-container-2">
          <Header/>
          <MainLibrary/>
        </div>
  
        <div className="h"></div>
        <Footer/>
      </div>
         
     )
 }

 export default Library