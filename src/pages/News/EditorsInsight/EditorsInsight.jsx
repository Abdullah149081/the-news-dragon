import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from "../../../assets/editorsInsight1.png";

const EditorsInsight = () => {
  return (
    <div>
      <h2 className="dragon-title mb-4">Editors Insight</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Text className="dragon-title">21 The Most Stylish Wedding Guest Dresses For Spring</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EditorsInsight;
