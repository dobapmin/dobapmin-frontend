import axios from 'axios';

const BASE_URL = '/api';

export const fetchMainData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/main`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
