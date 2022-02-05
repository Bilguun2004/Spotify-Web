import "../styles/Login.scss";
import Logo from "../assets/black logo.svg";
import Apple from "../assets/Apple.png";
import Google from "../assets/google.png";
import error from "../assets/error.svg"
const Login = () => {
  return (
    <div className="Login-container">
      <div className="header">
        <img src={Logo} height={"120px"} width={"240px"} />
      </div>
      <div className="Login">
        <div className="Login-methods-text">
          To continue, log in to Spotify.
        </div>
        <div className="error">
            <img src={error} style={{margin:'10px'}}/> <div>Incorrect username or password.</div>
        </div>
        <div
          className="Login-methods"
          style={{ background: "rgb(59, 89, 152)" }}
        >
          CONTINUE WITH FACEBOOK
        </div>
        <div className="Login-methods" style={{ background: "rgb(0, 0, 0)" }}>
          <img src={Apple} height="40px" />
          CONTINUE WITH APPLE
        </div>
        <div
          className="Login-methods"
          style={{ background: "#ffffff", color: "#6A6A6A" }}
        >
          <img src={Google} height="25px" />
          CONTINUE WITH GOOGLE
        </div>
      </div>
      <div className="Login-middleline">
        <span className="Login-middleline-line"></span>
        <span>OR</span>
        <span className="Login-middleline-line"></span>
      </div>

      <div className="Login-input">
        <div className="Login-input-item">
          <span className="Login-input-text">Email address or username</span>
          <input
            className="Login-input-input"
            placeholder="Email address or username"
          ></input>
        </div>
      </div>
      <div className="Login-input">
        <div className="Login-input-item">
          <span className="Login-input-text">Password</span>
          <input
            className="Login-input-input"
            placeholder="Password"
          ></input>
          <span>Forgot your password?</span>
        </div>
      </div>
      <div className="mid">
        <div className="Login-input-submit">
          <span className="Login-input-submit-left">
            <button className="Login-input-submit-button"></button>
            <span>Remember me</span>
          </span>
          <span className="Login-input-submit-submit">
            <span className="Login-input-submit-submit-1">LOG IN</span>
          </span>
        </div>
      </div>
      <div className="mid-2">
        <div className="line"></div>
        <div>
            Don't have an account?
        </div>
        <div className="mid-button">
            SIGN UP FOR SPOTIFY
        </div>
      </div>
    </div>
  );
};
export default Login;
