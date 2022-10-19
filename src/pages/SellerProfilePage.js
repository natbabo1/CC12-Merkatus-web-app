import React from "react";
import ProductCard from "../components/ui/ProductCard";
import ProfileCover from "../components/ui/ProfileCover";
import SellerImage from "../components/ui/SellerImage";

const productPlaceholder = {
  name: "Product Name",
  category: "เสื้อผ้าชาย",
  price: "300 ฿",
  image: "https://picsum.photos/200"
};

function SellerProfilePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center border-2">
      <ProfileCover src="https://images.ctfassets.net/hrltx12pl8hq/5orfKJqG0N9UopDnOVn2BW/1a2e92f5474911a4631722a6e70e7c5f/ezgif-5-44fa6284e5f3.gif" />
      <div className="w-56 flex flex-col items-center gap-y-4">
        <SellerImage src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png" />
        <h1 className="text-2xl font-bold">Seller Name</h1>
        <div className="flex flex-row">
          <button className="text-white bg-vivid-orange hover:bg-vivid-orange/80 rounded-lg text-sm px-8 py-2 mr-2 mb-2 font-bold">
            Follow
          </button>
          <button className="text-white  bg-vivid-orange hover:bg-vivid-orange/80 rounded-lg text-sm px-8 py-2 mr-2 mb-2 font-bold">
            Follow
          </button>
        </div>
      </div>

      <div className="w-[86%] flex items-center mt-16 mx-auto">
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
    </div>
  );
}

export default SellerProfilePage;
