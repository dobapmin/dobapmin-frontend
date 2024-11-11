import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function postLogout() {
  try {
    const res = await axios.post(
      `${BASE_URL}/logout`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
      { withCredentials: true }
    );
  } catch (err) {
    return err;
  }
}

export const postLogin = async (nickname) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/login`,
      {
        nickname: nickname,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      { withCredentials: true }
    );
    return res.data;
  } catch (err) {
    return '';
  }
};
