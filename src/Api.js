import axios from "axios";

const API_URL = "http://localhost:5000";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 3000,
});

export const wrapPromise = (promise) => {
  // Set initial status
  let status = "pending";
  // Store result
  let result;
  // Wait for promise
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export default api;
