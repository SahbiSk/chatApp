import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  credentials: "include",
});
///////actions
export const signup = async (data) => {
  console.log("data", data);
  try {
    const formData = new FormData();
    Object.keys(data).map((el) => formData.append(el, data[el]));
    const res = await Api.post("/user/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { user: res.data.user };
  } catch (error) {
    return { error: error.response.data.error };
  }
};
export const Login = async (data) => {
  try {
    const res = await Api.post("/user/login", data, {
      headers: {
        "content-type": "application/json",
      },
    });
    return { user: res.data.user };
  } catch (error) {
    return { error: error.response.data.error };
  }
};
