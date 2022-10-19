function ProductCard({ product }) {
  return (
    <div className="w-48 bg-vivid-orange/30 p-4 rounded-3xl">
      <div className="relative w-full pt-[100%] overflow-hidden">
        <img
          className="block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-auto max-h-full max-w-full rounded-lg"
          src={product.image}
          alt="category"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="text-xl">{product.name}</div>
        <div className="text-vivid-orange text-base mt-1">
          {product.category}
        </div>
        <div className="text-xl font-semibold">{product.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
