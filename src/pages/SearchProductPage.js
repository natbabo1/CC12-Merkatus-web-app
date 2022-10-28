import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as productService from "../api/productApi";
import ProductCard from "../components/ui/ProductCard";

function SearchProductPage() {
  const { search } = useParams();

  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await productService.getProductBySearch(search);
        setSearchProduct(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [search]);

  return (
    <>
      <h6 className="text-2xl mb-6 text-white p-3 bg-vivid-orange">
        Search Product
      </h6>
      <div className="w-[86%] flex items-center mx-auto">
        <div className="flex flex-wrap py-2 justify-center gap-x-4 gap-y-6">
          {searchProduct?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchProductPage;
