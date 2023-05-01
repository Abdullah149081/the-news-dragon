import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <div style={{ marginTop: "21px" }}>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto nav-link gap-4 ">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
              </Nav>
              <Nav className="d-md-inline-flex align-items-md-center">
                {user && <FaUserCircle style={{ width: "41px", height: "41px" }} />}

                {user ? (
                  <button type="button" className="btn-dragon">
                    logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button type="button" className="btn-dragon btn-login">
                      login
                    </button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavigationBar;
