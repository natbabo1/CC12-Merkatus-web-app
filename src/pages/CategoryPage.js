import React, { useEffect, useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import * as productService from ".././api/productApi";
import { useParams } from "react-router-dom";

const productPlaceholder = {
  name: "Product Name",
  category: "เสื้อผ้าชาย",
  price: "300 ฿",
  image: "https://picsum.photos/200",
};

function CategoryProduct() {
  const { categoryId } = useParams();

  const [productCategory, setProductCategory] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await productService.getProductByCategory(categoryId);
        console.log(res.data.products);
        setProductCategory(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <h6 className="text-2xl mb-6 text-white p-3 bg-vivid-orange">
        Category Product
      </h6>
      <div className="w-[86%] flex items-center mx-auto">
        <div className="flex flex-wrap py-2 justify-center gap-x-4 gap-y-6">
          {productCategory?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryProduct;
