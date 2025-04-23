import axios from "axios";

const api = axios.create({
  baseURL: "https://nt.softly.uz/api", 
});

export default api;
