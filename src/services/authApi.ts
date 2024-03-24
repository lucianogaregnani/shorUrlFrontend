/* eslint-disable @typescript-eslint/no-explicit-any */
import { User, UserRegister } from "../types/User.type";
import { axiosInstance } from "./axios";

export const authApi = {
  login: async ({ email, password }: User) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  register: async ({ email, password, repassword }: UserRegister) => {
    try {
      const { data } = await axiosInstance.post("/auth/register", {
        email,
        password,
        repassword,
      });

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  logout: async () => {
    try {
      const { data } = await axiosInstance.get("/auth/logout");

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  getRefreshToken: async () => {
    try {
      const { data } = await axiosInstance.get("/auth/refresh");

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
};
