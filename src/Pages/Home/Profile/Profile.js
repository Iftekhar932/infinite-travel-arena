import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import emptyImg from "../../Additional images/emptyImg.png";
import AllChoices from "../AllChoices/AllChoices";
import AllVehicles from "../AllVehicles/AllVehicles";
import "./Profile.css";

const Profile = () => {
  const { user, setIsHere } = useAuth();
  const { placeDeleteID } = useParams();
  setIsHere(false);
  const handleDeletion = () => {
    const deleteInfo = { id: placeDeleteID, email: user.email };
    // DELETE API (index.js line 72)
    fetch(`http://localhost:5000/deletePlace/${placeDeleteID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleteInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  return (
    <>
      <h1>{placeDeleteID}</h1>
      {/* used same css as 'login.js' */}
      <div className="container w-100 mx-auto mt-5 w-100">
        <div className="row w-75 mx-auto">
          <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
            <img
              src={emptyImg}
              alt="No Image of user"
              width="100%"
              style={{ borderRadius: "100%" }}
            />
          </div>

          <div className="mt-2 mx-auto text-center col-sm-12">
            <h1>{user.displayName}</h1>
            <h6>Email:{user.email}</h6>
          </div>
        </div>

        <div className="placeBox-formation text-center my-5">
          <h1 className="mt-5 ">Places that you've chosen</h1>
          <div>
            {user.email && <AllChoices handleDeletion={handleDeletion} />}
          </div>

          <div className="my-5">
            <h1 className="">Services that you've chosen</h1>
            <div className="">{user.email && <AllVehicles />}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
