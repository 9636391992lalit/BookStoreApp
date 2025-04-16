import React,{useEffect,useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import axios from "axios";
import Cards from "./Cards";
function Freebook() {
  const [book,setBook]=useState([])
    useEffect(()=>{
    const getBook=async()=>
        {
        try{
             const res=await axios.get("http://localhost:4001/book");
             

             const data=res.data.filter((data) => data.category === "Free");
             console.log(data);
             setBook(data);
        }
        catch(error)
        {
            console.log(error)

        }
        }
        getBook();

    },[])
  // Fix: Filter must return a value
  
  
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
        {book.map((items)=>(<Cards item={items} key={items.id}/>))}
      </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebook;
