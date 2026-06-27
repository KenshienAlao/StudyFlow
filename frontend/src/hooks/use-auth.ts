import { ROUTES } from "@/config/route.config";
import { authService } from "@/service/auth.service";
import { FirstTime } from "@/validation/auth.validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ApiResponse } from "@/model/api.model";

const authKey = {
  auth: ["auth"] as const,
};

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (res: ApiResponse<FirstTime>) => {
      toast.success(res.message);
      if (res.data?.isFirstTime === true) {
        router.replace(ROUTES.SETUP);
      } else {
        router.replace(ROUTES.DASHBOARD);
      }
      queryClient.invalidateQueries({ queryKey: authKey.auth });
    },
    onError: (err: Error) => toast.error(err.message),
  });
}

export function useRegister() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.register,
    onSuccess: (res: ApiResponse) => {
      toast.success(res.message);
      router.replace(ROUTES.LOGIN);
      queryClient.invalidateQueries({ queryKey: authKey.auth });
    },
    onError: (err: Error) => toast.error(err.message),
  });
}
