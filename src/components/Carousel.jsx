import { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import {BiLeftArrowAlt,BiRightArrowAlt} from 'react-icons/bi'

const sliderData = [
  {
    url: "https://www.chetor.com/wp-content/uploads/2018/04/03-gardens-by-the-bay.jpg",
  },
  {
    url: "https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/previewImage/PowerfulReasons_hero.jpg",
  },
  {
    url: "https://www.mgairan.com/images/upload/1573501280_1535198589_%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87%20%D8%B3%D9%86%DA%AF%D8%A7%D9%BE%D9%88%D8%B1(1).jpg",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 py-16 relative flex justify-center itmes-center duration-700">
     <BiLeftArrowAlt onClick={prevSlide} className=" absolute top-[50%] text-5xl left-8  text-white cursor-pointer"/>
     <BiRightArrowAlt onClick={nextSlide} className="absolute top-[50%] text-5xl right-8 text-white cursor-pointer"/>
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className="w-[800px] h-[400px]  object-cover rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
