import React from "react";

function SellerImage({ src }) {
  return (
    <div className="w-64">
      <div className="relative w-full pt-[100%] overflow-hidden">
        <img
          className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
          src={src}
        />
      </div>
    </div>
  );
}

export default SellerImage;
