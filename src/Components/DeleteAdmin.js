import React, { useState } from "react";
import { handleDeleteAdmin } from "../services/adminServices";

export default function DeleteAdmin() {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleDeleteAdmin(fullName, setMessage);
    setFullName("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-poppins mb-8 mt-4">
        {" "}
        DELETE ADMINISTRATOR{" "}
      </h2>{" "}
      <div className="bg-[#D9D9D9] p-8 rounded-md w-full max-w-2xl">
        <form onSubmit={onSubmit} className="space-y-6">
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
          <div className="flex items-center justify-center">
            <button
              className="bg-[#651823] hover:bg-[#450314] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[180px] h-[53px] rounded-full font-poppins text-2xl"
              type="submit"
            >
              Delete{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
        {message && <p className="mt-3 text-center"> {message} </p>}{" "}
      </div>{" "}
    </div>
  );
}
