import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../services/adminServices";
import Logo from "../../assets/adminSideLLogo-removebg-preview.png"; // Ensure the correct path and name

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password, setMessage, setUserType, navigate);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#d9d9d9]">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <img src={Logo} alt="Logo" className="w-24 mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold text-gray-900">
            {" "}
            Sign in to your account{" "}
          </h2>{" "}
        </div>{" "}
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Email address{" "}
            </label>{" "}
            <input
              className="appearance-none block w-full bg-white text-gray-900 border border-gray-300 rounded-lg py-2 px-3 leading-tight focus:outline-none focus:ring-[#651823] focus:border-[#651823]"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>{" "}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Password{" "}
            </label>{" "}
            <input
              className="appearance-none block w-full bg-white text-gray-900 border border-gray-300 rounded-lg py-2 px-3 leading-tight focus:outline-none focus:ring-[#651823] focus:border-[#651823]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>{" "}
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-[#651823] hover:text-[#651823]">
              {" "}
              Forgot your password ?{" "}
            </a>{" "}
          </div>{" "}
          <button
            className="w-full bg-blue-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Sign in
          </button>{" "}
          {message && (
            <p className="mt-2 text-center text-red-600"> {message} </p>
          )}{" "}
        </form>{" "}
        <div className="text-center">
          <span className="text-sm text-gray-700"> or sign in with </span>{" "}
          <div className="mt-4 flex justify-center space-x-3">
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <svg
                className="w-5 h-5 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 2.89 8.15 6.84 9.48.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.34-3.37-1.34-.46-1.18-1.12-1.5-1.12-1.5-.91-.62.07-.61.07-.61 1.01.07 1.55 1.04 1.55 1.04.91 1.55 2.39 1.1 2.97.84.09-.66.36-1.1.65-1.36-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02.8-.22 1.66-.33 2.51-.33.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.21 2.41.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.37.32.69.94.69 1.89v2.8c0 .26.18.57.69.48A10 10 0 0022 12.04c0-5.52-4.48-10-10-10z" />
              </svg>{" "}
            </button>{" "}
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <svg
                className="w-5 h-5 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.94 12.15c0-5.52-4.48-10-10-10-5.52 0-10 4.48-10 10 0 4.41 2.89 8.15 6.84 9.48.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.34-3.37-1.34-.46-1.18-1.12-1.5-1.12-1.5-.91-.62.07-.61.07-.61 1.01.07 1.55 1.04 1.55 1.04.91 1.55 2.39 1.1 2.97.84.09-.66.36-1.1.65-1.36-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02.8-.22 1.66-.33 2.51-.33.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.21 2.41.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.37.32.69.94.69 1.89v2.8c0 .26.18.57.69.48A10 10 0 0022 12.04c0-5.52-4.48-10-10-10z" />
              </svg>{" "}
            </button>{" "}
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
              <svg
                className="w-5 h-5 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.3c0-1.21-.1-2.3-.29-3.34H12v6.31h6.84c-.3 1.54-1.18 2.82-2.49 3.69v3h4.03c2.36-2.17 3.72-5.36 3.72-9.66z" />
                <path d="M12 24c3.24 0 5.96-1.07 7.94-2.88l-4.03-3c-1.12.76-2.55 1.21-3.91 1.21-3.01 0-5.56-2.04-6.46-4.78H1.44v3.04C3.41 22.06 7.4 24 12 24z" />
                <path d="M5.54 14.66C5.18 13.63 5 12.58 5 11.5s.18-2.13.54-3.16V5.3H1.44A11.996 11.996 0 000 12c0 1.87.44 3.63 1.22 5.2l4.32-2.54z" />
                <path d="M12 4.81c1.64 0 3.11.56 4.28 1.66l3.21-3.21C17.95 1.55 15.24.5 12 .5 7.4.5 3.41 2.44 1.44 5.22l4.1 3.11C6.44 6.85 8.99 4.81 12 4.81z" />
              </svg>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Login;
