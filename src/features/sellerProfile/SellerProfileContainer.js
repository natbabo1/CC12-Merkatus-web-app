import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ui/ProductCard";
import ProfileCover from "../../components/ui/ProfileCover";
import SellerImage from "../../components/ui/SellerImage";
import * as userService from "../../api/userApi";
import Star from "../../components/ui/Star";

function SellerProfileContainer() {
  const { sellerId } = useParams();

  const [seller, setSeller] = useState(null);
  const [sellerRating, setSellerRating] = useState(0);

  useEffect(() => {
    const fetchSeller = async () => {
      const {
        data: { seller, avgRating }
      } = await userService.getSellerAndProducts(sellerId);

      setSeller(seller);
      setSellerRating(avgRating);
    };
    fetchSeller();
  }, [sellerId]);

  return (
    <div className="w-full flex flex-col items-center justify-center border-2">
      <ProfileCover src={seller?.coverImage} />
      <div className="w-56 flex flex-col items-center gap-y-4">
        <SellerImage src={seller?.profileImage} />
        <h1 className="text-2xl font-bold">
          {seller?.firstName} {seller?.lastName}
        </h1>
        <div className="flex flex-row items-center">
          {/* <button className="text-white bg-vivid-orange hover:bg-vivid-orange/80 rounded-lg text-sm px-8 py-2 mr-2 mb-2 font-bold">
            Follow
          </button>
          <button className="text-white  bg-vivid-orange hover:bg-vivid-orange/80 rounded-lg text-sm px-8 py-2 mr-2 mb-2 font-bold">
            Follow
          </button> */}
          <Star color="vivid-orange" fill={sellerRating} />
          <Star color="vivid-orange" fill={sellerRating - 1} />
          <Star color="vivid-orange" fill={sellerRating - 2} />
          <Star color="vivid-orange" fill={sellerRating - 3} />
          <Star color="vivid-orange" fill={sellerRating - 4} />
          <div className="font-semibold bg-vivid-orange text-white text-xs px-1 ml-2 rounded-md">
            {(+sellerRating).toFixed(1)}
          </div>
        </div>
      </div>

      <div className="w-[86%] flex items-center mt-16 mx-auto">
        <div className="flex flex-wrap py-2 justify-center gap-x-4 gap-y-6">
          {seller
            ? seller.Seller.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default SellerProfileContainer;
