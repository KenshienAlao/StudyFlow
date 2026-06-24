import { ROUTES } from "@/config";
import { ApiResponse } from "@/model";
import { profileService } from "@/service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const profileKeys = {
    profile: ["profile"] as const,
}

export function useGetProfile() {
    return useQuery({
        queryKey: profileKeys.profile,
        queryFn: profileService.get,
        select: (res) => res.data,
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}

export function useUpdateProfile() {

const queryClient = useQueryClient();

    return useMutation({
        mutationFn: profileService.update,
        onSuccess: (res: ApiResponse) => {
            toast.success(res.message);
            queryClient.setQueryData(profileKeys.profile, res.data)
            queryClient.invalidateQueries({ queryKey: profileKeys.profile })
        },
        onError: (error: Error) => toast.error(error.message)
    })
}

export function useSetupProfile() {
const queryClient = useQueryClient();
const router = useRouter();

    return useMutation({
        mutationFn: profileService.setup,
        onSuccess: (res: ApiResponse) => {
            toast.success(res.message);
            queryClient.setQueryData(profileKeys.profile, res.data);
            queryClient.invalidateQueries({ queryKey: profileKeys.profile });
            router.replace(ROUTES.DASHBOARD);
        }, 
        onError: (error: Error) => toast.error(error.message)
    })
}