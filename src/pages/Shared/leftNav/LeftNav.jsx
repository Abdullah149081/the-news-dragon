import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./leftNav.css";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4 className="dragon-title">All Category</h4>
      <div>
        <div className="national-news">
          <h4 className="dragon-title">National News</h4>
        </div>
        <div className="category-link">
          {categories?.map((category) => (
            <p key={category.id}>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
