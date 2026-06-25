import { API_ENDPOINTS } from "@/config";
import { api } from "@/lib";
import { ApiResponse, Subject } from "@/model";
import { SubjectCreate, SubjectUpdate } from "@/validation";

export const subjectService = {
  get: (): Promise<ApiResponse<Subject[]>> =>
    api.get<Subject[], ApiResponse<Subject[]>>(API_ENDPOINTS.SUBJECT.GET),
  create_subject: (data: SubjectCreate): Promise<ApiResponse> =>
    api.post<any, ApiResponse>(API_ENDPOINTS.SUBJECT.CREATE, data),
  update_subject: (data: SubjectUpdate): Promise<ApiResponse> =>
    api.patch<any, ApiResponse>(API_ENDPOINTS.SUBJECT.UPDATE, data),
  delete_subject: (id: number): Promise<ApiResponse> =>
    api.delete<any, ApiResponse>(`${API_ENDPOINTS.SUBJECT.DELETE}/${id}`),
};
