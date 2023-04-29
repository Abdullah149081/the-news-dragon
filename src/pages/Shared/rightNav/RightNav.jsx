import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import bg from "../../../assets/bg.png";
import QZone from "../Qzone/Qzone";
import "./RightNav.css";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <div className="d-flex flex-column gap-2 mt-4">
        <Button variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="mt-5">
        <h4>Find Us On</h4>
        <ListGroup className="social-media mt-4">
          <ListGroup.Item className="d-inline-flex align-items-center gap-5">
            <FaFacebookF /> <span>faceBook</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-inline-flex align-items-center gap-5">
            <FaTwitter /> <span>Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-inline-flex align-items-center gap-5">
            <FaInstagram /> <span>Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone />
      </div>
      <div className="mt-4 position-relative">
        <img style={{ width: "100%" }} className="img-fluid img" src={bg} alt="" />
        <div className="position-absolute ad-news">
          <h2>Create an Amazing Newspaper</h2>
          <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <button type="button" className="btn-dragon">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
