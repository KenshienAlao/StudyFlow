import { ROUTES } from "@/config";
import { ApiResponse } from "@/model";
import { authService } from "@/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation"
import { toast } from "react-toastify";

export const loginKeys = {
    login: ["auth", "login"] as const,
}

export function useLogin() {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authService.login,
        onSuccess: (res: ApiResponse) => {
            toast.success("Login successful!");
            queryClient.setQueryData(loginKeys.login, res.data);
            router.replace(ROUTES.DASHBOARD)
        },
        onError: (err: Error) => toast.error(err.message)
    })
}