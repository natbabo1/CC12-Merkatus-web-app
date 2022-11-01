import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../contexts/CartContext";
import Avatar from "../components/ui/Avatar";
import Spinner from "../components/ui/Spinner";
import * as productService from "../api/productApi";
import * as userService from "../api/userApi";
import { Rating } from "flowbite-react";
import Star from "../components/ui/Star";

function ProductPage() {
  const { addNewProduct } = useCart();

  const [product, setProduct] = useState(null);
  const [sellerRating, setSellerRating] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProductAndSellerRating = async () => {
      try {
        const resProduct = await productService.getProductById(productId);
        const resSellerRating = await userService.getSellerRating(
          resProduct.data.product.Seller.id
        );
        setProduct(resProduct.data.product);
        setSellerRating(+resSellerRating.data.avgRating);
      } catch (err) {
        toast.error(err.response?.data?.message);
        console.log(err);
      }
    };

    fetchProductAndSellerRating();
  }, [productId]);

  const handleAddProduct = async () => {
    try {
      addNewProduct(product.id);
    } catch (err) {
      toast.error(err.response?.data?.message);
      console.log(err);
    }
  };

  return (
    <>
      {product ? (
        <>
          <div className="flex ">
            <div className="flex flex-col w-1/2">
              <div className="w-full flex items-center justify-center">
                <div className="w-4/5 py-14">
                  <div className="w-full pt-[100%] relative rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-auto w-full rounded-lg"
                      alt="Product"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2  flex flex-col">
              <div className="w-full h-5/6 flex items-center justify-center">
                <div className="w-[90%] h-[90%]">
                  <p className="font-semibold text-xl mt-10">
                    {product.productName}
                  </p>
                  <p className="font-semibold text-xl mt-10">
                    {product.unitPrice}B
                  </p>
                  <p className="font-semibold text-xl mt-10">
                    รายละเอียดสินค้า
                  </p>
                  <p className="mt-10">{product.productDetail}</p>

                  <div
                    className={`text-white flex items-center w-52 mt-10 justify-center bg-vivid-orange h-10 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net 
                    
              }`}
                    onClick={handleAddProduct}
                  >
                    เพิ่มสินค้าลงรถเข็น
                  </div>
                  <div className="mt-10 ">
                    <i className="fa-regular fa-heart text-vivid-orange text-lg mr-3" />
                    <span className="font-semibold text-xl ">
                      Add to wish list
                    </span>
                  </div>

                  <div className="self"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="flex flex-col w-1/2 h-40 items-center justify-center">
              <div className="w-4/5 h-full flex items-center justify-between gap-4 ">
                <img
                  src={product.Extraimages[0]?.image}
                  className="block w-1/4 grow rounded-lg"
                  alt="Product"
                />
                <img
                  src={product.Extraimages[1]?.image}
                  className="block w-1/4 grow rounded-lg"
                  alt="Product"
                />
                <img
                  src={product.Extraimages[2]?.image}
                  className="block w-1/4 grow rounded-lg"
                  alt="Product"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="bg-vivid-orange w-[90%] flex items-center rounded-3xl h-40 py-5 pl-5 pr-10">
                <div className="w-1/2 flex items-center">
                  <div className="w-1/2 h-full">
                    <Avatar src={product.Seller.profileImage} />
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-between items-center gap-y-3">
                    <div
                      className={`text-white flex items-center w-28  justify-center bg-mermaid-net h-14 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net`}
                    >
                      แชทเลย
                    </div>
                    <div
                      className={`text-white flex items-center w-28  justify-center bg-mermaid-net h-14 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net`}
                    >
                      ดูร้านค้า
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-l-2 border-white pl-4 h-full">
                  <p className="text-white mb-1">Rating</p>
                  <Star fill={sellerRating} />
                  <Star fill={sellerRating - 1} />
                  <Star fill={sellerRating - 2} />
                  <Star fill={sellerRating - 3} />
                  <Star fill={sellerRating - 4} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ProductPage;
