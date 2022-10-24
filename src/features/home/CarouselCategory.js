import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import CategoryCard from "../../components/ui/CategoryCard";
import * as categoryService from "../../api/categoryApi";

function CarouselCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await categoryService.getAllCategory();
        setCategory(res.data.allCategory);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const mapSlide = () => {
    const slides = [];
    for (let i = 0; i < category.length; i += 10) {
      const categoryCards = category
        .slice(i, i + 10)
        .map((item) => <CategoryCard key={item.id} category={item} />);

      slides.push(
        <div
          key={i}
          className="flex flex-wrap justify-center w-[86%] gap-x-7 gap-y-5 items-end text-center font-bold -mt-3"
        >
          {categoryCards}
        </div>
      );
    }

    return slides;
  };

  return (
    <div className="w-full h-[35rem]">
      <Carousel slideInterval={10000}>
        {category.length !== 0 ? (
          mapSlide()
        ) : (
          <div className="w-full h-full text-center">Loading...</div>
        )}
      </Carousel>
    </div>
  );
}

export default CarouselCategory;
