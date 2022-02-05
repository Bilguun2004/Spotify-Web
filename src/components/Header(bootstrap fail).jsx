import { Navbar, Container, Row, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/spotify.png";
import '../styles/Header.scss';
const Header = () => {
  return (
    <Navbar bg="black" className="p-3">
      <Container fluid className="px-3">
        <Navbar.Brand>
          <img src={logo} height={"35px"} />
        </Navbar.Brand>
        <div className="d-flex flex-row text-white">
          <Nav.Link hover  className="header-text" >Premium</Nav.Link>
          <Nav.Link className="header-text">Support</Nav.Link>
          <Nav.Link className="header-text">Download</Nav.Link>
          <Nav.Item style={{fontSize:'x-large'}} >|</Nav.Item>
          <Nav.Link className="header-text">Sign up</Nav.Link>
          <Nav.Link className="header-text">Log in</Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};
export default Header;
