import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Rating = ({ rating }) => {
  const { review, email } = rating;
  return (
    <div>
      <SwiperSlide>
        <h5>User:{email}</h5>
        <h6>Review:{review}</h6>
      </SwiperSlide>
    </div>
  );
};

export default Rating;
