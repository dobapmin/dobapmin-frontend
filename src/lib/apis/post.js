import axios from 'axios';

const BASE_URL = '/api';

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
        }
      });
    return response.data;
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
          }
        });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };
