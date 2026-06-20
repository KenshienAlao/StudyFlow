import z from "zod";

export const LoginScheme = z.object({
    email: z.string().email("Invalid email address").trim().min(1, "Email is required"),
    password: z.string().trim().min(1, "Password is required"),
})

export type LoginInput = z.infer<typeof LoginScheme>