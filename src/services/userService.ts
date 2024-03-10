import { APIResponse, LoginUser, User } from "@/types";
import axiosAuth, { axiosNonAuth } from "@/utils/axios";

import { EventCreationPayload } from "@/types/event";

const api = import.meta.env.VITE_API_BASE_URL;

export const userService = {
  newUser: async (payload: User): Promise<APIResponse> => {
    const response = await axiosNonAuth.post(`${api}/user`, payload);
    return response;
  },
  loginUser: async (payload: LoginUser): Promise<APIResponse> => {
    const response = await axiosAuth.post(`${api}/auth`, payload);
    return response;
  },
  eventDetails: async (): Promise<APIResponse> => {
    const response = await axiosAuth.get(`${api}/event`);
    return response;
  },
  createEvent: async (payload: EventCreationPayload): Promise<APIResponse> => {
    const response = await axiosAuth.post(`${api}/event`, payload);
    return response;
  },
  getProfile: async (): Promise<APIResponse> => {
    const response = await axiosAuth.get(`${api}/profile`);
    return response;
  },
  patchEvent: async (payload: any): Promise<APIResponse> => {
    const response = await axiosAuth.patch(`${api}`, payload);
    return response;
  },
  singleEventDetails: async (payload: any): Promise<APIResponse> => {
    const response = await axiosAuth.get(`${api}/event/${payload}`);
    return response;
  },
};
