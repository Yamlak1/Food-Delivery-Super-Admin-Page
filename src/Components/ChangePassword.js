import React, { useState } from "react";
import { handleChangePassword } from "../services/adminServices";

export default function ChangePasswordofAdmin() {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleChangePassword(fullName, newPassword, setMessage);
    setFullName("");
    setNewPassword("");
  };

  return (
    <div className="text-black flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-poppins mt-32">
        CHANGE PASSWORD OF ADMINISTRATOR{" "}
      </h2>{" "}
      <div className="bg-[#D9D9D9] w-full max-w-2xl p-8 mt-10 mx-auto rounded-md">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="mb-6">
            <input
              className="appearance-none bg-[#D9D9D9] border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-900 font-poppins text-2xl"
              type="text"
              placeholder="Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>{" "}
          <div className="mb-6">
            <input
              className="appearance-none bg-[#D9D9D9] border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-900 font-poppins text-2xl"
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>{" "}
          <div className="flex items-center justify-center">
            <button
              className="bg-[#651823] hover:bg-[#450314] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[180px] h-[70px] rounded-full font-poppins text-2xl"
              type="submit"
            >
              Change Password{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
        {message && <p className="mt-3"> {message} </p>}{" "}
      </div>{" "}
    </div>
  );
}
