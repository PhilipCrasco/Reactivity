import axios from "axios";
// import { decodeUser } from "./decode-user";

// const user = decodeUser();

// Set config defaults when creating the instance
export const request = axios.create({
  baseURL: "https://localhost:7221/api/",
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer " + user?.token,
  },
});
