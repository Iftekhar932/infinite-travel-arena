import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Places from "../Places/Places";

const Home = () => {
  return (
    <div className="homePage">
      <Header></Header>
      <Banner></Banner>
      <Places></Places>
      <Footer></Footer>
    </div>
  );
};

export default Home;
