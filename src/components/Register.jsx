import "../styles/register.scss";
import logo from "../assets/black logo.svg";
import google from "../assets/google.png";
import Input from "./Input";
import Birthsection from "./Birthsection";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="container">
      <div className="Register">
        <div className="Register-header">
          <img src={logo} height="90px" width={"160px"} />
          <span>Sign up for free to start listening.</span>
        </div>
        <div className="Register-buttons">
          <div className="Register-buttons-container">
            <span
              className="Register-buttons-button"
              style={{ background: "#1877F2", color: "white" }}
            >
              Sign up with Facebook
            </span>
          </div>
          <div className="Register-buttons-container">
            <span
              className="Register-buttons-button"
              style={{ border: "2px rgb(83,83,83) solid" }}
            >
              <img src={google} height="13px" />
              Sign up with Google
            </span>
          </div>
        </div>
        <div className="Or">
          <span className="Or-line"></span>
          or
          <span className="Or-line"></span>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h3>Sign up with your email address</h3>
        </div>

        <div className="Inputs">
          <Input
            Title={"What's your email?"}
            placeholder={"Enter your email."}
            phone={true}
          />
          <Input
            Title={"Confirm your email"}
            placeholder={"Enter your email again."}
          />
          <Input
            Title={"Create a password"}
            placeholder={"Create a password."}
          />
          <Input
            Title={"What should we call you?"}
            placeholder={"Enter a profile name(This appears on your profile)."}
          />
        </div>
        <Birthsection />
        <div className="Register-agree">
          <button className="Register-agree-button" type="checkbox" />
          <span className="Register-agree-text">
            I would prefer not to receive marketing messages from Spotify
          </span>
        </div>
        <div className="Register-agree">
          <button className="Register-agree-button" type="checkbox" />
          <span className="Register-agree-text">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>
       
          <div className="Register-end">
            <span className="Register-end-text">
              By clicking on sign-up, you agree to Spotify's Terms and
              Conditions of Use.
            </span>
          </div>
          <div className="Register-end">
            <span>
              To learn more about how Spotify collects, uses, shares and
              protects your personal data, please see Spotify's Privacy Policy.
            </span>
          </div>
          <div className="Register-buttonn-container">
            <div className="Register-buttonn">
            <div className="Register-buttonn-item">
              Sign up
            </div>
          </div>
          <div style={{ display:'flex',  width:'180px', flexDirection:'row',justifyContent:'space-between'}}>
            Have an account?
            <Link style={{color:'#1ED760'}} to='login'>
            Log in
            </Link>
          </div>
          </div>
          
      </div>
    </div>
  );
};
export default Register;
