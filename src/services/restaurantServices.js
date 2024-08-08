import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:7000/admin";

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

const handleGetRestaurants = async () => {
  try {
    const response = await axios.get(`${baseUrl}/getAllRestaurant`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data; // Assuming response.data contains the array of restaurants
  } catch (error) {
    console.error("Error viewing restaurants: ", error);
    return []; // Return an empty array in case of error
  }
};

export { handleGetRestaurants };
