import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Places from "../Places/Places";
import Ratings from "../Ratings/Ratings";

const Home = () => {
  return (
    <div className="homePage">
      <Banner></Banner>
      <Places></Places>
      <Ratings></Ratings>
      <Footer></Footer>
    </div>
  );
};

export default Home;
