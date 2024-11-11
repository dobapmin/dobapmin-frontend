import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const fetchMainData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/main`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
