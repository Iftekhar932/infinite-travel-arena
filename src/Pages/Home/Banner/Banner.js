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
      <div className="img-box2">
        <div>
          <h4>Like to go around?</h4>
          <img
            src="https://i.ibb.co/zFrDLKS/s-migaj-9-D3swqm-EFjk-unsplash.jpg"
            alt=""
            width="100%"
            height="25%"
          />
        </div>
        <div>
          <h4>Wanna enjoy travelling to the fullest?</h4>
          <img
            src="https://i.ibb.co/sK2GVrM/luca-bravo-O453-M2-Liufs-unsplash.jpg"
            alt=""
            width="100%"
            height="25%"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
