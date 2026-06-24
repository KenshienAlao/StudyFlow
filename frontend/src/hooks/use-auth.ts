import { ROUTES } from "@/config";
import { ApiResponse, FirstTime } from "@/model";
import { authService } from "@/service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"
import { toast } from "react-toastify";

export function useLogin() {
    const router = useRouter();

    return useMutation({
        mutationFn: authService.login,
        onSuccess: (res: ApiResponse<FirstTime>) => {
            toast.success(res.message);
            if (res.data?.isFirstTime === true) {
                router.replace(ROUTES.SETUP);
            } else {
                router.replace(ROUTES.DASHBOARD);
            }
        },
        onError: (err: Error) => toast.error(err.message)
    })
}

export function useRegister() {
    const router = useRouter();

    return useMutation({
        mutationFn: authService.register,
        onSuccess: (res: ApiResponse) => {
            toast.success(res.message);
            router.replace(ROUTES.LOGIN)
        }, 
        onError: (err: Error) => toast.error(err.message)
    })
}