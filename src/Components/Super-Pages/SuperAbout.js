import React from "react";
import Cookies from "js-cookie";

function SuperAbout() {
  const fullName = Cookies.get("full_name");
  const email = Cookies.get("email");
  const userType = Cookies.get("user_type");
  const image = Cookies.get("image");

  const imageUrl = image
    ? `http://localhost:7000${image}`
    : "path-to-default-image";

  console.log(imageUrl);

  return (
    <div className="p-4 max-w-96 ml-7">
      <h1 className="text-2xl font-bold mt-20 mb-4"> About </h1>{" "}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full mx-auto"
          onError={(e) => (e.target.src = "path-to-default-image")}
          style={{ display: "block", margin: "auto" }}
        />{" "}
        <p className="text-lg mt-4">
          <strong> Full Name: </strong> {fullName}{" "}
        </p>{" "}
        <p className="text-lg">
          <strong> Email: </strong> {email}{" "}
        </p>{" "}
        <p className="text-lg">
          <strong> User Type: </strong> {userType}{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

export default SuperAbout;
