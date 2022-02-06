import "../styles/register.scss";
import x from "../assets/x.png"
const Input = ({ Title, placeholder, error,phone }) => {
  return (
    <div className="Input-container">
      <span className="Input-container-text">{Title}</span>
      <input
        className="Input-container-input"
        placeholder={placeholder}
      ></input>
      {error ?<span className="Input-container-error"><img src={x} height='12px'/>{error}</span>:'' }
      {phone ? <span className="Input-container-phone">Use phone number instead.</span>:''}
    </div>
  );
};

export default Input;
