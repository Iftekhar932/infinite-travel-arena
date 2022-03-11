import React, { lazy, Suspense } from "react";
import { Button, Spinner } from "react-bootstrap";
// import useAuth from "../../../hooks/useAuth";
// import AllChoices from "../AllChoices/AllChoices";
// import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Places from "../Places/Places";
// import Ratings from "../Ratings/Ratings";
import Services from "../Services/Services";


const Ratings = lazy(() => import("../Ratings/Ratings"));
const Banner = lazy(() => import("../Banner/Banner"));

const Home = () => {
  const loadingAnimation = (
    <Button
      variant="dark"
      disabled
      style={{
        marginLeft: "50%",
        marginTop: "1vh",
        margin: "1rem auto auto 50%",
      }}
    >
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  );
  return (
    <div className="homePage">
      <Suspense fallback={loadingAnimation}>
        <Banner></Banner>
      </Suspense>
      <Places></Places>
      <Services></Services>
      <Suspense fallback={loadingAnimation}>
        <Ratings></Ratings>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Home;
