import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handlerLogOut = () => {
    logOut();
  };

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
                {user && (
                  <>
                    <span className="dragon-title me-2">{user.displayName}</span>
                    {/* <FaUserCircle style={{ width: "41px", height: "41px", marginRight: "5px" }} /> */}
                    <img className="rounded-circle  border border-2 border-primary" style={{ width: "41px", height: "41px", marginRight: "5px" }} src={user.photoURL} alt="" />
                  </>
                )}

                {user ? (
                  <button onClick={handlerLogOut} type="button" className="btn-dragon">
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
