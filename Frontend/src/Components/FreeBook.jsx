import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";

import Cards from "./Cards";
function Freebook() {
  
  // Fix: Filter must return a value
  const filterData = list.filter((data) => data.category === "Free");
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-[1600px] mx-auto px-4 mb-8">

        <div>
        <h2 className="font-bold text-2xl pb-2">Free Offered Courses</h2>
        <p className="text-gray-600">
          Discover our collection of free courses to help you learn and grow. Explore a wide range of topics curated for learners like you.
        </p>
        </div>
      

      <div className="px-4  ">
        <Slider {...settings}>
        {filterData.map((items)=>(<Cards item={items} key={items.id}/>))}
      </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebook;
