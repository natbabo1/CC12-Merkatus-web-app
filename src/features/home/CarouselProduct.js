import React from "react";
import { Carousel } from "flowbite-react";
import CategoryCard from "../../components/ui/CategoryCard";

function CarouselProduct() {
  return (
    <div className="w-full h-[35rem]">
      <Carousel slideInterval={10000}>
        <div className="flex flex-wrap justify-center w-[86%] gap-x-7 gap-y-5  text-center font-bold -mt-6">
          <CategoryCard
            src="https://picsum.photos/200"
            category="เสื้อผ้าชาย"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="เสื้อผ้าหญิง"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="มือถือและอุปกรณ์เสริม"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="นาฬิกาและแว่นตา"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="ความงามและของใช้ส่วนตัว"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="เสื้อผ้าชาย"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="เสื้อผ้าหญิง"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="มือถือและอุปกรณ์เสริม"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="นาฬิกาและแว่นตา"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="ความงามและของใช้ส่วนตัว"
          />
        </div>
        <div className="flex flex-wrap justify-center w-[86%] gap-x-7 gap-y-5  text-center font-bold -mt-6">
          <CategoryCard
            src="https://picsum.photos/200"
            category="เสื้อผ้าชาย"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="เสื้อผ้าหญิง"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="มือถือและอุปกรณ์เสริม"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="นาฬิกาและแว่นตา"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="ความงามและของใช้ส่วนตัว"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="เสื้อผ้าชาย"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="เสื้อผ้าหญิง"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="มือถือและอุปกรณ์เสริม"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="นาฬิกาและแว่นตา"
          />
          <CategoryCard
            src="https://picsum.photos/200"
            category="ความงามและของใช้ส่วนตัว"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselProduct;
