import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import blankImg from "../../Additional images/emptyImg.png";

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
        spaceBetween={80}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(d) => d}
        onSwiper={(swiper) => swiper}
      >
        {ratings.map((rating) => (
          <SwiperSlide key={rating.email}>
            <div
              style={{
                display: "block",
                wordWrap: "break-word",
                height: "auto",
                minWidth: "11rem",
              }}
              className="bg-light border border-3 rounded-pill p-5 my-3"
            >
              <div className="mb-2">
                <img
                  src={blankImg}
                  // width="100%"
                  className="rounded-circle w-25 ms-2 border border-dark"
                  alt=""
                />
              </div>
              <div>
                {" "}
                <h6>Email:{rating.email}</h6>
                <h5>review:{rating.review}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ratings;
