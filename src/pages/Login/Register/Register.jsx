import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";

const Register = () => {
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);
  const { createUser, updateUserData, validationEmail } = useContext(AuthContext);

  const handlerRegister = (e) => {
    e.preventDefault();
    setError("");
    const from = e.target;
    const email = from.email.value;
    const name = from.text.value;
    const photo = from.photo.value;
    const password = from.password.value;
    // console.log(email, text, photo, password);

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        from.reset();
        updateUserData(newUser, name, photo);
        validationEmail(newUser);
        toast("please check your email to verify your account");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handlerAccept = (e) => {
    // console.log(e.target.checked);
    setAccept(e.target.checked);
  };

  return (
    <div className=" login-container">
      <h2 className="text-center login-title ">Register your account</h2>
      <Form onSubmit={handlerRegister}>
        <Form.Group className="mb-3">
          <Form.Label className="login-text">Your Name</Form.Label>
          <Form.Control name="text" type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="login-text">Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter your email address" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-text">Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Photo URL" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-text">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Enter your password" />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text>
        <div className="d-flex align-items-center gap-4">
          <input onClick={handlerAccept} type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            Accept <Link to="/terms">Terms and Conditions</Link>
          </label>
        </div>

        <button type="submit" className="btn btn-secondary btn-dragon login-btn" disabled={!accept}>
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
    </div>
  );
};

export default Register;
