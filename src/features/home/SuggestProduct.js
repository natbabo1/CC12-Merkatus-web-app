import { useEffect, useState } from "react";
import ProductCard from "../../components/ui/ProductCard";
import * as productService from "../../api/productApi";

function SuggestProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const {
          data: { products }
        } = await productService.getSuggestProducts();
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <h6 className="text-2xl mb-6 text-white p-3 bg-vivid-orange">
        Suggest Product
      </h6>
      <div className="w-[86%] flex items-center mx-auto">
        <div className="flex flex-wrap py-2 justify-center gap-x-4 gap-y-6">
          {products.length > 0
            ? products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default SuggestProduct;
