import { api } from "@/lib";
import { ApiResponse } from "@/model";
import { API_ENDPOINTS } from "@/config";
import { FirstTime, LoginInput, RegisterInput } from "@/validation";

export const authService = {
  register: (data: RegisterInput) =>
    api.post<any, ApiResponse>(API_ENDPOINTS.AUTH.REGISTER, data),
  login: (data: LoginInput) =>
    api.post<any, ApiResponse<FirstTime>>(API_ENDPOINTS.AUTH.LOGIN, data),
};
