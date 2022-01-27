import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Places from "../Places/Places";

const Home = () => {
  return (
    <div className="homePage">
      <Banner></Banner>
      <Places></Places>
      <Footer></Footer>
    </div>
  );
};

export default Home;
