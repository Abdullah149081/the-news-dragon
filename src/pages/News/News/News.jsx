import Card from "react-bootstrap/Card";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../EditorsInsight/EditorsInsight";
import "./News.css";

const News = () => {
  const { details, image_url, title, category_id } = useLoaderData();

  return (
    <div>
      <h4 className="dragon-title">Dragon News</h4>
      <Card className="mt-4 p-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="news-title">{title}</Card.Title>
          <Card.Text className="news-details">{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <button className="btn-dragon d-flex gap-2 align-items-center" type="button">
              <FaArrowLeft /> <span>All news in this category</span>
            </button>
          </Link>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <EditorsInsight />
      </div>
    </div>
  );
};

export default News;
