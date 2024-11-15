import axios from 'axios';

const OrderBaseUrl = 'https://food-delivery-backend-uls4.onrender.com/orders';
const UserBaseUrl = 'https://food-delivery-backend-uls4.onrender.com/user';
const RestaurantBaseUrl = `https://food-delivery-backend-uls4.onrender.com/restaurant`;
// const baseUrl = `https://food-delivery-backend-uls4.onrender.com/restaurant`;
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

export const getTotalCompletedDelivery = async () => {
  try {
    const response = await axios.get(
      `${OrderBaseUrl}/getTotalCompletedDelivery`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting Completed delivery: ', error);
    return null; // You can handle this case as needed
  }
};

export const getTotalRestaurant = async () => {
  try {
    const response = await axios.get(`${RestaurantBaseUrl}/totalRestaurant`);
    return response.data;
  } catch (error) {
    console.error('error getting Total restaurant: ', error);
  }
};

export const getAllUser = async () => {
  try {
    const response = await axios.get(`${UserBaseUrl}/getAllUser`);
    return response.data;
  } catch (error) {
    console.error('error getting All users: ', error);
  }
};

export const TotalOrders = async (setMessage) => {
  try {
    const response = await axios.get(`${OrderBaseUrl}/totalOrders`);

    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};
