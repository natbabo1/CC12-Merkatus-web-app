import React from "react";
import ProductCard from "../components/ui/ProductCard";

const productPlaceholder = {
  name: "Product Name",
  category: "เสื้อผ้าชาย",
  price: "300 ฿",
  image: "https://picsum.photos/200"
};

function CategoryProduct() {
  return (
    <>
      <h6 className="text-2xl mb-6 text-white p-3 bg-vivid-orange">
        Category Product
      </h6>
      <div className="w-[86%] flex items-center mx-auto">
        <div className="flex flex-wrap py-2 justify-center gap-x-4 gap-y-6">
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
          <ProductCard product={productPlaceholder} />
        </div>
      </div>
    </>
  );
}

export default CategoryProduct;
