import api from "@/lib/api";
import { API_ENDPOINTS } from "@/config/api.config";
import { ApiResponse } from "@/model/api.model";
import { Task } from "@/model/task.model";
import {
  TaskCreate,
  TaskDelete,
  TaskUpdate,
} from "@/validation/task.validation";

export const taskService = {
  get: (): Promise<ApiResponse<Task[]>> =>
    api.get<Task[], ApiResponse<Task[]>>(API_ENDPOINTS.TASK.GET),
  create_task: (data: TaskCreate): Promise<ApiResponse> =>
    api.post<any, ApiResponse>(API_ENDPOINTS.TASK.CREATE, data),
  update_task: (data: TaskUpdate): Promise<ApiResponse> =>
    api.patch<any, ApiResponse>(API_ENDPOINTS.TASK.UPDATE, data),
  delete_task: (id: TaskDelete): Promise<ApiResponse> =>
    api.delete<any, ApiResponse>(`${API_ENDPOINTS.TASK.DELETE}/${id}`),
};
