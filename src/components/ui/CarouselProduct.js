import React from "react";
import { Carousel } from "flowbite-react";
import SuggestProduct from "./SuggestProduct";

function CarouselProduct() {
  return (
    <div className="  w-[120vh] h-[60vh]  ">
      <Carousel slideInterval={5000}>
        <div className=" flex flex-wrap  justify-center gap-x-2 gap-y-2 text-center font-bold">
          <div className="w-[12rem] h-[14rem] border-solid ">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>

          <div className="w-[12rem] h-[14rem] ">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <br />
            <p>Category</p>
          </div>
        </div>

        <div className=" flex flex-wrap justify-center gap-x-2 gap-y-2 text-center font-bold">
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>

          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
          <div className="w-[12rem] h-[14rem]">
            <img
              className="h-[10rem]"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
            <p>Category</p>
          </div>
        </div>
      </Carousel>
      <SuggestProduct />
    </div>
  );
}

export default CarouselProduct;
