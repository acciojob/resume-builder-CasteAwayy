import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileCreated } from "../resumeSlice";

function Profile({ pageNumber, setPageNumber }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [profileImage, setprofileImage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const navigate = useNavigate();
  const data = useSelector((state) => state.user);
  console.log(data);
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      profileCreated(firstName, lastName, phoneNumber, address, profileImage)
    );
    setPageNumber(pageNumber + 1);
    navigate("/homepage/education");
  }
  return (
    <>
      <p>Add your profile details</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            value={data?.firstName || firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="url">Profile Image</label>
          <input
            type="file"
            id="url"
            name="url"
            value={profileImage}
            onChange={(e) => setprofileImage(e.target.value)}
          />
        </div>
        <Navigation pageNumber={pageNumber} setPageNumber={setPageNumber} to='/homepage/education'/>
      </form>
    </>
  );
}

export default Profile;
