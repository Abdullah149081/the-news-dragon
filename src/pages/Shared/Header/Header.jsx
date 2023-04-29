import moment from "moment";
import Container from "react-bootstrap/Container";
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
    </Container>
  );
};

export default Header;
