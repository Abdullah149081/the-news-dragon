import moment from "moment";
import logo from "../../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <img src={logo} alt="logo" />
        <p className="header-title">Journalism Without Fear or Favour</p>
        <p className="time-date">
          <span style={{ color: "#403f3f" }}>{moment().format("dddd")}</span>, <span style={{ color: "#706F6F" }}>{moment().format("MMMM D, YYYY")}</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
