import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/leftNav/LeftNav";
import RightNav from "../pages/Shared/rightNav/RightNav";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            <h1>main section</h1>
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
