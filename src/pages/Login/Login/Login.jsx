import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className=" login-container">
      <h2 className="text-center login-title ">Login your account</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-text">Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-text">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Enter your password" />
        </Form.Group>

        <button type="button" className="btn-dragon login-btn">
          login
        </button>
        <p className="text-center">
          <span className="login-account">Dont’t Have An Account ?</span>
          <span>
            <Link className="news-link" to="/register">
              Register
            </Link>
          </span>
        </p>
      </Form>
      <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
    </div>
  );
};

export default Login;
