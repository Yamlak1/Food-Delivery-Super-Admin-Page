import React, { useState } from "react";
import { handleCreateAdmin } from "../services/adminServices";

export default function CreateAdmin() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleCreateAdmin(fullName, email, phone, password, setMessage);
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-poppins mb-8 mt-4">
        {" "}
        CREATE ADMINISTRATOR{" "}
      </h2>{" "}
      <div className="bg-[#D9D9D9] p-8 rounded-md w-full max-w-2xl">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <input
              className="appearance-none bg-[#D9D9D9] border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-900 font-poppins text-2xl"
              type="text"
              placeholder="Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>{" "}
          <div>
            <input
              className="appearance-none bg-[#D9D9D9] border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-900 font-poppins text-2xl"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>{" "}
          <div>
            <input
              className="appearance-none bg-[#D9D9D9] border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-900 font-poppins text-2xl"
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>{" "}
          <div>
            <input
              className="appearance-none bg-[#D9D9D9] border-b-2 border-gray-700 w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-900 font-poppins text-2xl"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>{" "}
          <div className="flex items-center justify-center">
            <button
              className="bg-[#651823] hover:bg-[#450314] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[180px] h-[70px] rounded-full font-poppins text-2xl"
              type="submit"
            >
              Create Admin{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
        {message && <p className="mt-3"> {message} </p>}{" "}
      </div>{" "}
    </div>
  );
}
