import { useNavigate } from "react-router-dom";

function CategoryCard({ src, category, categoryId }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="w-48" onClick={handleClick}>
      <div className="relative w-full pt-[100%] overflow-hidden">
        <img
          className="block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-auto max-h-full max-w-full rounded-lg"
          src={src}
          alt="category"
        />
      </div>
      <div className="mt-4">{category}</div>
    </div>
  );
}

export default CategoryCard;
