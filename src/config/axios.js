import axios from "axios";

const axiosConfig = () => {
  axios.defaults.baseURL = "http://localhost:3000";
  console.log(axios.defaults);
};

export default axiosConfig;
