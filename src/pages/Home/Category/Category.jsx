import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  // const { id } = useParams();
  const categoryNews = useLoaderData();

  return (
    <div>
      {/* <h1>category {id}</h1> */}
      <h1>category: {categoryNews.length}</h1>
    </div>
  );
};

export default Category;
