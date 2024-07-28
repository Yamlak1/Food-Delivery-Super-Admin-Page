import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:7000/superAdmin";

const handleResponse = (response, setMessage) => {
  if (response.status >= 200 && response.status < 300) {
    setMessage("Operation successful");
    return response.data;
  } else {
    setMessage(response.data.message);
    return null;
  }
};
// Function to set a cookie
const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/; SameSite=None; Secure`;
};

const handleCreateAdmin = async (
  fullName,
  email,
  phone,
  password,
  setMessage
) => {
  const admin = { phone, email, password, fullName };
  try {
    const response = await axios.post(`${baseUrl}/createAdmin`, admin, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    await handleResponse(response, setMessage);
  } catch (error) {
    setMessage("An error occurred: " + error.message);
  }
};

const handleDeleteAdmin = async (fullName, setMessage) => {
  try {
    const admin = { fullName };
    const response = await axios.put(`${baseUrl}/deleteAdminByName`, admin, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    await handleDeleteAdmin(response, setMessage);
  } catch (error) {
    console.error("Error Deleting Admin: ", error);
  }
};

const handleChangePassword = async (fullName, newPassword, setMessage) => {
  try {
    const admin = { fullName, newPassword };
    const response = await axios.put(
      `${baseUrl}/changeAdminPasswordByName`,
      admin,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    // Update the message with the response data
    setMessage(response.data.message);
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      setMessage(error.response.data.error || "Failed to change password");
    } else if (error.request) {
      // Request was made but no response received
      setMessage("No response received from the server");
    } else {
      // Something else caused the error
      setMessage("Error setting up the request");
    }
    console.error("Error changing password: ", error);
  }
};

export { handleCreateAdmin, handleDeleteAdmin, handleChangePassword };
