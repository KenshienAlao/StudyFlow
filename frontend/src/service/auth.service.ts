import api from "@/lib/api";
import { API_ENDPOINTS } from "@/config/api.config";
import { ApiResponse } from "@/model/api.model";
import {
  FirstTime,
  LoginInput,
  RegisterInput,
} from "@/validation/auth.validation";

export const authService = {
  register: (data: RegisterInput) =>
    api.post<any, ApiResponse>(API_ENDPOINTS.AUTH.REGISTER, data),
  login: (data: LoginInput) =>
    api.post<any, ApiResponse<FirstTime>>(API_ENDPOINTS.AUTH.LOGIN, data),
};
