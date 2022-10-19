import React from "react";
import SellerImage from "../components/ui/SellerImage";

function SellerProfilePage() {
  return (
    <div className=" mt-16 flex flex-col items-center justify-center border-2 border-red-600">
      <img
        className="mb-[-8rem] w-[1000px] h-[350px]"
        src="https://images.ctfassets.net/hrltx12pl8hq/5orfKJqG0N9UopDnOVn2BW/1a2e92f5474911a4631722a6e70e7c5f/ezgif-5-44fa6284e5f3.gif"
        alt=""
      />
      <div className="w-56 flex flex-col items-center gap-y-4">
        <SellerImage />
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

      <div className="p-8 grid gap-y-6 gap-x-6 grid-cols-4 place-items-center">
        <div className="w-56 h-64 flex-row rounded-3xl text-center p-4 bg-vivid-orange/30 cursor-pointer">
          <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          <br />
          <h1>Name</h1>
          <h1>Category</h1>
          <h1>Price</h1>
        </div>
        <div className="w-56 h-64 flex-row rounded-3xl text-center p-4 bg-vivid-orange/30 cursor-pointer">
          <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          <br />
          <h1>Name</h1>
          <h1>Category</h1>
          <h1>Price</h1>
        </div>
        <div className="w-56 h-64 flex-row rounded-3xl text-center p-4 bg-vivid-orange/30 cursor-pointer">
          <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          <br />
          <h1>Name</h1>
          <h1>Category</h1>
          <h1>Price</h1>
        </div>
        <div className="w-56 h-64 flex-row rounded-3xl text-center p-4 bg-vivid-orange/30 cursor-pointer">
          <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
          <br />
          <h1>Name</h1>
          <h1>Category</h1>
          <h1>Price</h1>
        </div>
      </div>
    </div>
  );
}

export default SellerProfilePage;
