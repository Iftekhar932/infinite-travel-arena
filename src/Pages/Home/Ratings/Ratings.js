import React, { useEffect, useState } from "react";
import Rating from "../Rating/Rating";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";

const Ratings = () => {
  const [ratings, setRatings] = useState([]);
  //GET API
  useEffect(() => {
    fetch("http://localhost:5000/ratings")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);
  // To use javascript "script"

  return (
    <div style={{ cursor: "grab" }}>
      {/* {ratings.map((rating) => (
        <Rating rating={rating} key={rating._id}></Rating>
      ))} */}

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {ratings.map((rating) => (
          <SwiperSlide key={rating.email}>
            <div>
              <h6>Email:{rating.email}</h6>
            </div>
            <div>
              <h5>review:{rating.review}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ratings;
