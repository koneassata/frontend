import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-61io.onrender.com', // le backend
  withCredentials: true
});

export const fetchAllProducts = async () => {
  const response = await API.get('/Product');
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await API.get(`/Product/${id}`);
  return response.data;
};
