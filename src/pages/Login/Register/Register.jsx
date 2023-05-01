import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" login-container">
      <h2 className="text-center login-title ">Register your account</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-text">Your Name</Form.Label>
          <Form.Control name="text" type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-text">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-text">Photo URL</Form.Label>
          <Form.Control type="file" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-text">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <button type="submit" className="btn-dragon login-btn">
          Register
        </button>
        <p className="text-center">
          <span className="login-account">Already Have An Account ?</span>
          <span>
            <Link className="news-link" to="/login">
              login
            </Link>
          </span>
        </p>
      </Form>
      <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
    </div>
  );
};

export default Register;
