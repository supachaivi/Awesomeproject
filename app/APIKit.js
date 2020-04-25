import axios from 'axios';
// import Cookie from "react-native-cookie";

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

let APIKit = axios.create({
  baseURL: 'http://192.168.1.36:8000/api',
  timeout: 10000,
  // headers: {
    // "Accept": "application/json",
    // "Content-Type": "application/json",
  //   "X-CSRFToken":
  // }
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
  APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default APIKit;