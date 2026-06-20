import { useMutation } from "@tanstack/react-query";
import { authService } from "@/service";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config";
import { toast } from "react-toastify";

export const registerKeys = {
    register: ["auth", "register"] as const,
};

export function useRegister() { 
    const router = useRouter();
    
    return useMutation({
        mutationFn: authService.register,
        onSuccess: () => {
            toast.success("Register successful!")
            router.replace(ROUTES.LOGIN);
        },
        onError: (err: Error) => toast.error(err.message),
    })
}