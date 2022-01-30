import React, { useEffect, useState } from "react";
import Rating from "../Rating/Rating";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Ratings = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ratings")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {ratings.map((rating) => (
          <Rating rating={rating} key={rating._id}></Rating>
        ))}
      </Swiper>
    </>
  );
};

export default Ratings;
