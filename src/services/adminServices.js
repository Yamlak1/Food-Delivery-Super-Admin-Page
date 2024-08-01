import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:7000/superAdmin";
const AdminBaseUrl = "http://localhost:7000/admin";

// const handleResponse = (response, setMessage) => {
//   if (response.status >= 200 && response.status < 300) {
//     setMessage("Operation successful");
//     return response.data;
//   } else {
//     setMessage(response.data.message);
//     return null;
//   }
// };

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

    setMessage(response.data.message);
  } catch (error) {
    if (error.response) {
      setMessage(error.response.data.error || "Failed to change password");
    } else if (error.request) {
      setMessage("No response received from the server");
    } else {
      // Something else caused the error
      setMessage("Error setting up the request");
    }
    console.error("Error changing password: ", error);
  }
};

const handleLogin = async (
  email,
  password,
  setMessage,
  setUserType,
  navigate
) => {
  const admin = { email, password };
  try {
    const response = await fetch(`${AdminBaseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response data:", data);

    if (data && data.user && data.user.user_type) {
      const { user_type, fullName, email, id, image } = data.user;

      // Set cookies for user details
      setCookie("user_type", user_type, 1);
      setCookie("full_name", fullName, 1);
      setCookie("email", email, 1);
      setCookie("id", id, 1);
      setCookie("image", image, 1); // This should be the URL or path

      setUserType(user_type);

      if (user_type === "admin") {
        navigate("/adminDashboard");
      } else if (user_type === "super") {
        navigate("/superDashboard");
      } else {
        setMessage("Invalid user type");
      }
    } else {
      setMessage("Invalid response from server");
    }
  } catch (error) {
    setMessage("An error occurred: " + error.message);
  }
};

export {
  handleCreateAdmin,
  handleDeleteAdmin,
  handleChangePassword,
  handleLogin,
};
