import z from "zod";

export const RegisterSchema = z.object({
    email: z.string().email("Invalid email address").trim().min(1, "Email is required"),
    password: z.string().trim().min(1, "Password is required").min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().trim().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export type RegisterInput = z.infer<typeof RegisterSchema>