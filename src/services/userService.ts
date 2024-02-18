import { axiosNonAuth } from "@/utils/axios";

const api = import.meta.env.VITE_API_BASE_URL;

export const userService = {
    newUser:async (payload:any): Promise<any> => {
        const response = await axiosNonAuth.post(`${api}/user`,payload);
        return response;
    }
}