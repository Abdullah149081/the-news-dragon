import React from "react";
import Button from "react-bootstrap/Button";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightNav = () => {
  return (
    <div className="mt-5">
      <h4>Login with</h4>
      <div className="d-flex flex-column gap-2 mt-4">
        <Button variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
    </div>
  );
};

export default RightNav;
