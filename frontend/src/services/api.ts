import axios from 'axios';

const api = axios.create({
  baseURL: 'https://602741c5dd4afd001754a6de.mockapi.io/api',
});

export default api;
