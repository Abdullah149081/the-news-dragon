import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";
import "./login.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    setError("");
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    signIn(email, password)
      .then(() => {
        from.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className=" login-container">
      <h2 className="text-center login-title ">Login your account</h2>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-text">Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-text">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Enter your password" />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text>
        <button type="submit" className="btn-dragon login-btn">
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
    </div>
  );
};

export default Login;
