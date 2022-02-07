import "../styles/register.scss";
import logo from "../assets/black logo.svg";
import google from "../assets/google.png";
import Input from "./Input";
import Birthsection from "./Birthsection";
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
          <div style={{width:'100%', textAlign:'center' }}>
          <h3 >
       Sign up with your email address
       </h3>
        </div>
       
        <div className="Inputs">
          <Input Title={"What's your email?"} placeholder={'Enter your email.'}  phone={true}/>
          <Input Title={"Confirm your email"} placeholder={'Enter your email again.'}/>
          <Input Title={"Create a password"} placeholder={'Create a password.'}/>
          <Input Title={"What should we call you?"} placeholder={'Enter a profile name(This appears on your profile).'}/>
        </div>
        <Birthsection/>
      </div>
    </div>
  );
};
export default Register;
