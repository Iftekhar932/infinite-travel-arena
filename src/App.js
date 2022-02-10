import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Signup from "./Pages/Login/Signup/Signup";
import AuthProvider from "./context/AuthProvider";
import Services from "./Pages/Home/Services/Services";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";
import RatingForm from "./Pages/Home/RatingForm/RatingForm";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Booking from "./Pages/Home/Booking/Booking";
import AllChoices from "./Pages/Home/AllChoices/AllChoices";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            {/* <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            /> */}
            <Route
              path="/ratingform"
              element={
                <PrivateRoute>
                  <RatingForm />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Services />} />

            <Route path="/booking/:placeID" element={<Booking />} />
            <Route path="/allChoices" element={<AllChoices />} />

            {/* <Route path="home/booking/:placeID" element={<Booking />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
