import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as productService from "../api/productApi";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await productService.getProductById(productId);

        setProduct(res.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [productId]);

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
                  src={
                    "https://cf.shopee.co.th/file/fb363c0cf56daa44a6cca5f905cdfa30_tn"
                  }
                  className="block w-1/4 grow rounded-lg"
                  alt="Product"
                />
                <img
                  src="https://cf.shopee.co.th/file/fb363c0cf56daa44a6cca5f905cdfa30_tn"
                  className="block w-1/4 grow rounded-lg"
                  alt="Product"
                />
                <img
                  src="https://cf.shopee.co.th/file/fb363c0cf56daa44a6cca5f905cdfa30_tn"
                  className="block w-1/4 grow rounded-lg"
                  alt="Product"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="bg-vivid-orange w-[90%] flex rounded-3xl h-40 py-5 pl-5 pr-10">
                <div className="w-1/2 flex">
                  <div className="w-1/2 h-full">
                    <img
                      className="rounded-md h-full w-full"
                      src={product.Seller.profileImage}
                      alt="Product"
                    />
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-between items-center">
                    <div
                      className={`text-white flex items-center w-28  justify-center bg-mermaid-net h-14 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net 
              }`}
                    >
                      แชทเลย
                    </div>
                    <div
                      className={`text-white flex items-center w-28  justify-center bg-mermaid-net h-14 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net 
              }`}
                    >
                      ดูร้านค้า
                    </div>
                  </div>
                </div>
                <div className="w-1/2 border-l-2 border-white">
                  <p className="text-white pl-4">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ProductPage;
