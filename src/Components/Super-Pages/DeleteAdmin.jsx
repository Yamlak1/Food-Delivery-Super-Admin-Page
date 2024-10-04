import React, { useState } from "react";
import { handleDeleteAdmin } from "../../services/adminServices";

export default function DeleteAdmin() {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    handleDeleteAdmin(fullName, setMessage);
    setFullName("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {" "}
          Create Admin{" "}
        </h2>{" "}
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Deleting..." : "Delete Admin"}{" "}
          </button>{" "}
          {message && (
            <p className="mt-4 text-center text-red-500"> {message} </p>
          )}{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}
