import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import emptyImg from "../../Additional images/emptyImg.png";

import "./Profile.css";
const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      {/* used same css as 'login.js' */}
      <div className="container w-100 mx-auto mt-5 w-100 ">
        <div className="row w-75 mx-auto">
          <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
            <img src={emptyImg} alt="No Image of user" width="100%" />
          </div>

          <div className="mt-2 mx-auto text-center col-sm-12">
            <h1>{user.displayName}</h1>
            <h6>{user.email}</h6>
          </div>
        </div>

        {/* <AllChoices /> */}
      </div>
    </>
  );
};

export default Profile;
