/* eslint-disable @typescript-eslint/no-explicit-any */
import { User, UserRegister } from "../types/User.type";
import { axiosInstance } from "./axios";

export const authApi = {
  login: async ({ email, password }: User) => {
    const { data } = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    return data;
  },
  register: async ({ email, password, repassword }: UserRegister) => {
    const { data } = await axiosInstance.post("/auth/register", {
      email,
      password,
      repassword,
    });

    return data;
  },
  logout: async () => {
    const { data } = await axiosInstance.get("/auth/logout");

    return data;
  },
  getRefreshToken: async () => {
    const { data } = await axiosInstance.get("/auth/refresh");

    return data;
  },
};
