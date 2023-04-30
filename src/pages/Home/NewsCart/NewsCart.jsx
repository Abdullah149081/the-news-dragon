import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./newsCart.css";

const NewsCart = ({ news }) => {
  const { _id, title, details, image_url } = news;

  return (
    <Card className="mb-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title className="newsCart-title">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="newsCart-details" >
          {details.length < 250 ? (
            <span>{details}</span>
          ) : (
            <>
              {details.slice(0, 250)}... <Link className="news-link" to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsCart;
