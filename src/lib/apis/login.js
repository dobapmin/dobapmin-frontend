import axios from 'axios';

export async function postLogout() {
  try {
    const res = await axios.post(
      'http://localhost:3000/api/logout',
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
      'http://localhost:3000/api/login',
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
