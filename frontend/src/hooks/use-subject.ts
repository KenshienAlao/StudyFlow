import { ApiResponse } from "@/model";
import { subjectService } from "@/service/subject.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const subjectKey = {
  subject: ["subject"] as const,
};

export function useGetSubject() {
  return useQuery({
    queryKey: subjectKey.subject,
    queryFn: subjectService.get,
    select: (res) => res.data ?? [],
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useCreateSubject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: subjectService.create_subject,
    onSuccess: (res: ApiResponse) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: subjectKey.subject });
    },
    onError: (err: Error) => console.error(err),
  });
}

export function useUpdateSubject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: subjectService.update_subject,
    onSuccess: (res: ApiResponse) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: subjectKey.subject });
    },
    onError: (err: Error) => console.error(err),
  });
}

export function useDeleteSubject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: subjectService.delete_subject,
    onSuccess: (res: ApiResponse) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: subjectKey.subject });
    },
    onError: (err: Error) => console.error(err),
  });
}
