import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-box">
      <div className="img-box">
        <img
          src="https://i.ibb.co/k1B3MrD/mohamed-nohassi-odx-B5o-IG-i-A-unsplash.jpg"
          alt=""
          width="100%"
        />
        <h1 className="img-text">Like to Travel? is travelling your hobby?</h1>
      </div>
      <div className="places"></div>
      <div className="img-box"></div>
    </div>
  );
};

export default Banner;
