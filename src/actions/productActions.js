import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/', // le backend
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
