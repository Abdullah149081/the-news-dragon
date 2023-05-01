import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./newsCart.css";

const NewsCart = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex  align-items-center gap-4">
          <Image width="40px" height="40px" src={author.img} roundedCircle />
          <div className="author">
            <p style={{ color: "#403F3F" }}>{author.name ? author.name : "author"}</p>
            <p style={{ color: "#706F6F" }}>{author.published_date ? moment(author.published_date).format("YYYY-MM-DD") : ""}</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="newsCart-title">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="newsCart-details">
          {details.length < 250 ? (
            <span>{details}</span>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link className="news-link" to={`/news/${_id}`}>
                Read more
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 d-flex  gap-2 ">
          <Rating readOnly style={{ maxWidth: 100 }} value={rating.number} emptySymbol={<FaRegStar />} placeholderSymbol={<FaStar style={{ color: "#FF8C47" }} />} fullSymbol={<FaStar />} />
          <span className="rating">{rating?.number}</span>
        </div>
        <div className="rating">
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
