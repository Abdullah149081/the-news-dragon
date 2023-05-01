import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Trams = () => {
  return (
    <Container className="mt-5">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our news page. These terms and conditions govern your use of our website, which includes accessing, browsing, or registering to use our services. By using our website, you accept
        these terms and conditions in full. If you disagree with any part of these terms and conditions, please do not use our website.
      </p>
      <h2>1. Website Use</h2>
      <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
      <h2>2. Cookies</h2>
      <p>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.</p>
      <h2>3. Disclaimer</h2>
      <p>
        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on
        this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or
        errors to the fullest extent permitted by law.
      </p>
      <h2>4. Limitations of Liability</h2>
      <p>
        Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products,
        services or information available through this website meet your specific requirements.
      </p>
      <h2>5. Intellectual Property</h2>
      <p>
        This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited
        other than in accordance with the copyright notice, which forms part of these terms and conditions.
      </p>
      <p>
        <Link to="/register">Go to Register </Link>
      </p>
    </Container>
  );
};

export default Trams;
