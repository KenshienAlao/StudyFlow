import { api } from "@/lib";
import { API_ENDPOINTS } from "@/config";
import { ApiResponse, Task } from "@/model";
import { TaskCreate, TaskDelete, TaskUpdate } from "@/validation";

export const taskService = {
  get: (): Promise<ApiResponse<Task[]>> =>
    api.get<Task[], ApiResponse<Task[]>>(API_ENDPOINTS.TASK.GET),
  create_task: (data: TaskCreate): Promise<ApiResponse> =>
    api.post<any, ApiResponse>(API_ENDPOINTS.TASK.CREATE, data),
  update_task: (data: TaskUpdate): Promise<ApiResponse> =>
    api.patch<any, ApiResponse>(API_ENDPOINTS.TASK.UPDATE, data),
  delete_task: (id: number): Promise<ApiResponse> =>
    api.delete<any, ApiResponse>(`${API_ENDPOINTS.TASK.DELETE}/${id}`),
};
