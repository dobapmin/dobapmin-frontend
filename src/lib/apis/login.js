import axios from "axios";

export async function postLogout() {}

export const postLogin = async (nickname) => {
  console.log("name111111", nickname);
  try {
    console.log(nickname);
    // const res = await axios.post("http://localhost:3000/", {
    //   nickname: nickname,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    return await res.json();
  } catch (err) {
    console.log(err);
    return {};
  }
};
