/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHeaders } from "../utils/getHeaders";
import { axiosInstance } from "./axios";

export const linkApi = {
  getAll: async (token: string) => {
    try {
      const { data } = await axiosInstance.get("/link", getHeaders(token));

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  getByShortLink: async (token: string, shortLink: string) => {
    try {
      const { data } = await axiosInstance.get(
        `/link/${shortLink}`,
        getHeaders(token)
      );

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  update: async (token: string, linkId: string, longLink: string) => {
    try {
      const { data } = await axiosInstance.patch(
        `/link/${linkId}`,
        {
          longLink,
        },
        getHeaders(token)
      );

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  create: async (token: string, longLink: string) => {
    try {
      const { data } = await axiosInstance.post(
        "/link",
        {
          longLink,
        },
        getHeaders(token)
      );

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
  remove: async (token: string, linkId: string) => {
    try {
      const { data } = await axiosInstance.delete(
        `/link/${linkId}`,
        getHeaders(token)
      );

      return data;
    } catch (error: any) {
      return error.message;
    }
  },
};
