import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl = 'http://localhost:7000/superAdmin';
const AdminBaseUrl = 'http://localhost:7000/admin';
const OrderBaseUrl = 'http://localhost:7000/orders';

// const baseUrl = 'https://food-delivery-backend-uls4.onrender.com/superAdmin';
// const AdminBaseUrl = 'https://food-delivery-backend-uls4.onrender.com/admin';
// const OrderBaseUrl = 'https://food-delivery-backend-uls4.onrender.com/orders';

const handleResponse = async (response, setMessage) => {
  const contentType = response.headers.get('Content-Type');
  let data =
    contentType && contentType.includes('application/json')
      ? await response.json()
      : { message: await response.text() };

  if (response.ok) {
    setMessage('Operation successful');
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
  image,
  setMessage
) => {
  const formData = new FormData();
  formData.append('fullName', fullName);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('password', password);
  formData.append('image', image); // Assuming `image` is the file object

  try {
    const response = await axios.post(`${baseUrl}/createAdmin`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    });

    await handleResponse(response, setMessage);
  } catch (error) {
    setMessage('An error occurred: ' + error.message);
  }
};

const handleDeleteAdmin = async (fullName, setMessage) => {
  try {
    console.log('Starting the delete request'); // Added log
    console.log('FullName: ', fullName); // Log fullName value

    const url = `${baseUrl}/deleteAdminByName`;
    console.log('Delete URL:', url); // Log the URL

    if (!fullName) {
      setMessage('Please provide a full name.');
      return;
    }

    // Add logging before axios
    console.log('Before axios.post()');

    const response = await axios.post(
      url,
      { fullName }, // Send fullName in the body
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true, // Send cookies with the request
      }
    );

    console.log('After axios.post()'); // Add log after axios.post()

    if (response.status === 200) {
      setMessage('Admin deleted successfully.');
    } else if (response.status === 404) {
      setMessage('Admin not found.');
    } else {
      setMessage('Server problem occurred, please try again.');
    }
  } catch (error) {
    console.error('Error in service: ', error);

    if (error.response) {
      console.error('Server responded with: ', error.response.data);
    }
    if (error.message === 'Network Error') {
      setMessage('Network problem, please try again.');
    } else {
      setMessage('An unexpected error occurred.');
    }
  }
};

const handleChangePassword = async (fullName, newPassword, setMessage) => {
  try {
    const admin = { fullName, newPassword };
    console.log('Sending password change request for:', fullName);

    const response = await axios.put(
      `${baseUrl}/changeAdminPasswordByName`,
      admin,
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true, // Send cookies along with the request
      }
    );
    console.log('object');
    setMessage(response.data.message || 'Password changed successfully');
  } catch (error) {
    // Show error message based on the error response
    if (error.response) {
      setMessage(error.response.data.error || 'Failed to change password');
    } else if (error.request) {
      setMessage('No response received from the server');
    } else {
      setMessage('Error setting up the request');
    }
    console.error('Error changing password: ', error);
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
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(admin),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response data:', data);

    if (data && data.user && data.user.user_type) {
      const { user_type, fullName, email, id, image } = data.user;

      // Set cookies for user details
      setCookie('user_type', user_type, 1);
      setCookie('full_name', fullName, 1);
      setCookie('email', email, 1);
      setCookie('id', id, 1);
      setCookie('image', image, 1); // This should be the URL or path

      setUserType(user_type);

      if (user_type === 'admin') {
        navigate('/adminDashboard');
      } else if (user_type === 'super') {
        navigate('/superDashboard');
      } else {
        setMessage('Invalid user type');
      }
    } else {
      setMessage('Invalid response from server');
    }
  } catch (error) {
    setMessage('An error occurred: ' + error.message);
  }
};

const getAllEmp = async () => {
  try {
    const response = await fetch(`${baseUrl}/getAllAdmin`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error getting all employee: ', error);
    return [];
  }
};

const getEmpByName = async (fullName) => {
  try {
    const response = await fetch(
      `${baseUrl}/getAdminByName?fullName=${fullName}`,
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error getting all employee: ', error);
    return [];
  }
};

const getReports = async () => {
  try {
    const response = await fetch(`${baseUrl}/getReports`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error getting reports: ', error);
    return [];
  }
};

const updateReportStatus = async (reportId) => {
  try {
    const response = await axios.post(
      `${baseUrl}/updateReportStatus?reportId=${reportId}`
    );

    console.log(response.message);
    return response.message;
  } catch (error) {
    console.error('Error resolving the report:', error);
    throw error;
  }
};

const createDriver = async (agentData) => {
  try {
    const response = await axios.post(
      `${AdminBaseUrl}/deliveryagents`,
      agentData
    );
    return response.data;
  } catch (error) {
    console.error('Error creating delivery agent:', error);
    throw error;
  }
};

const getTop5Orders = async () => {
  try {
    const response = await axios.get(`${OrderBaseUrl}/getTop5Orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top 5 orders:', error);
    return null;
  }
};

export {
  handleCreateAdmin,
  handleDeleteAdmin,
  handleChangePassword,
  handleLogin,
  getAllEmp,
  getEmpByName,
  getReports,
  updateReportStatus,
  createDriver,
  getTop5Orders,
};
