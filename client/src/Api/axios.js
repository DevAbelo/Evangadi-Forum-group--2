import axios from "axios";
const instance = axios.create({
  baseURL: "https://evangadi-forum-back-end-753k.onrender.com/api",
});
export default instance;
