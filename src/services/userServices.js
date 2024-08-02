import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:7000/user";

const handleResponse = async (response, setMessage) => {
  const contentType = response.headers.get("Content-Type");
  let data =
    contentType && contentType.includes("application/json")
      ? await response.json()
      : { message: await response.text() };

  if (response.ok) {
    setMessage("Operation successful");
    return data;
  } else {
    setMessage(data.message);
    return null;
  }
};
// Function to set a cookie
const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/; SameSite=None; Secure`;
};

const handleGetUser = async (fullName, setMessage) => {
  const user = { fullName };
  try {
    const response = await fetch(`${baseUrl}/getUser?fullName=${fullName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (response.ok) {
      const userData = await response.json();
      return userData.id;
    } else {
      const errorData = await response.json();
      setMessage(`An error occurred: ${errorData.message}`);
      return null;
    }
  } catch (error) {
    setMessage("An error occurred: " + error.message);
    return null;
  }
};

export { handleGetUser };
