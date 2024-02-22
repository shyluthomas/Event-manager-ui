import { APIResponse, User } from "@/types";
import axiosAuth, { axiosNonAuth } from "@/utils/axios";

const api = import.meta.env.VITE_API_BASE_URL;

export const userService = {
  newUser: async (payload: User): Promise<APIResponse> => {
    const response = await axiosNonAuth.post(`${api}/user`, payload);
    return response;
  },
  loginUser: async (payload: any): Promise<APIResponse> => {
    const response = await axiosAuth.post(`${api}/auth`, payload);
    return response;
  },
};
