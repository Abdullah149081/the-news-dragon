import moment from "moment";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <img src={logo} alt="logo" />
        <p className="header-title">Journalism Without Fear or Favour</p>
        <p className="time-date">
          <span style={{ color: "#403f3f" }}>{moment().format("dddd")}</span>, <span style={{ color: "#706F6F" }}>{moment().format("MMMM D, YYYY")}</span>
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center baking-news">
        <button type="button" className="btn-dragon">
          Latest
        </button>
        <Marquee speed={50} pauseOnClick className="news-highlight">
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
      <div style={{ marginTop: "21px" }}>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav className="d-md-inline-flex align-items-md-center">
                <Nav.Link href="#deets">profile</Nav.Link>
                <Nav.Link className="" eventKey={2} to="/login">
                  <button type="button" className="btn-dragon btn-login">
                    login
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
