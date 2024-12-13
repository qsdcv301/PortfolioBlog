import axios from "axios";

const api = axios.create({
  baseURL: "https://api/github.com",
  headers: {
    Authorization: "Bearer 토큰",
    Accept: "application/vnd.github+json",
  },
});

export default api;
