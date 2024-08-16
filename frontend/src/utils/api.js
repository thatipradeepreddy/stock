import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchStocks = async () => {
  return await axios.get(`${API_URL}/stocks`);
};

export const fetchPortfolio = async () => {
  return await axios.get(`${API_URL}/portfolio`);
};
