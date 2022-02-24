import React from "react";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Places from "../Places/Places";
import Ratings from "../Ratings/Ratings";
import Services from "../Services/Services";

const Home = () => {
  const { setIsHere } = useAuth();
  setIsHere(true);
  return (
    <div className="homePage">
      <Banner></Banner>
      <Places></Places>
      <Services></Services>
      {/* <Ratings></Ratings> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
