import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  credentials: "include",
});
///////actions
export const signup = async (data) => {
  const res = await Api.post("/user/signup", data, {
    headers: {
      "content-type": "application/json",
    },
  });
  return res.data.user;
};
export const Login = async (data) => {
  const res = await Api.post("/user/login", data, {
    headers: {
      "content-type": "application/json",
    },
  });
  return res.data.user;
};
