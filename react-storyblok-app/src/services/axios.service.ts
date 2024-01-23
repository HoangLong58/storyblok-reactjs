import axios from "axios";

export const ApiClient = axios.create({
  baseURL: "https://t0dknvomt7.execute-api.us-east-2.amazonaws.com/dev/api-v1/",
});
