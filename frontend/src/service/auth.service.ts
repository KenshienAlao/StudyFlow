import {api}  from "@/lib";
import { ApiResponse, FirstTime, LoginInput, RegisterInput } from "@/model";
import { API_ENDPOINTS } from "@/config";

export const authService = {
    register: (data: RegisterInput) =>
        api.post<any, ApiResponse>(API_ENDPOINTS.AUTH.REGISTER, data),
    login: (data: LoginInput) =>
        api.post<any, ApiResponse<FirstTime>>(API_ENDPOINTS.AUTH.LOGIN, data),
};