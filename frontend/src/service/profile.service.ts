import { API_ENDPOINTS } from "@/config/api.config";
import api from "@/lib/api";
import { ApiResponse } from "@/model/api.model";
import { Profile } from "@/model/profile.model";
import { Setup, Update } from "@/validation/profile.validation";

export const profileService = {
  get: (): Promise<ApiResponse<Profile>> =>
    api.get<Profile, ApiResponse<Profile>>(API_ENDPOINTS.PROFILE.GET),
  setup: (data: Setup): Promise<ApiResponse> =>
    api.post<any, ApiResponse>(API_ENDPOINTS.PROFILE.SETUP, data),
  update: (data: Update): Promise<ApiResponse> =>
    api.patch<any, ApiResponse>(API_ENDPOINTS.PROFILE.UPDATE, data),
};
