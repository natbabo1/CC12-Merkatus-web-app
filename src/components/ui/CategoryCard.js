function CategoryCard({ src, category }) {
  return (
    <div className="w-48">
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
