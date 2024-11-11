import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const postBap = async (title, content, category, isAnonymous, totalCount) => {
  try {
    console.log("postBap 함수 실행")
    const response = await axios.post(`${BASE_URL}/board`,
        {
            title,
            content,
            category,
            isAnonymous,
            totalCount,
        },
        {
        headers: {
          "Content-Type": "application/json",
        }, withCredentials: true
      });
      console.log(response.status);
    return response.status;
  } catch (e) {
    console.error(e);
  }
};

export const postGame = async (title, content, totalCount) => {
    try {
    console.log("postGame 함수 실행")
      const response = await axios.post(`${BASE_URL}/gameBoard`,
        {
            title,
            content,
            totalCount,
        }, {
          headers: {
            "Content-Type": "application/json",
          }, withCredentials: true
        });
      return response.status;
    } catch (e) {
      console.error(e);
    }
  };
