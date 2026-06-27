import { ApiResponse } from "@/model/api.model";
import { taskService } from "@/service/task.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const taskKey = {
  task: ["task"] as const,
};

export function useGetTask() {
  return useQuery({
    queryKey: taskKey.task,
    queryFn: taskService.get,
    select: (res) => res.data ?? [],
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 mins
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: taskService.create_task,
    onSuccess: (res: ApiResponse) => {
      queryClient.invalidateQueries({ queryKey: taskKey.task });
      toast.success(res.message);
    },
    onError: (err: Error) => console.error(err.message),
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: taskService.update_task,
    onSuccess: (res: ApiResponse) => {
      queryClient.invalidateQueries({ queryKey: taskKey.task });
      toast.success(res.message);
    },
    onError: (err: Error) => console.error(err.message),
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: taskService.delete_task,
    onSuccess: (res: ApiResponse) => {
      queryClient.invalidateQueries({ queryKey: taskKey.task });
      toast.success(res.message);
    },
    onError: (err: Error) => console.error(err.message),
  });
}
