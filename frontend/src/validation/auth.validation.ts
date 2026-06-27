import z from "zod";

export const LoginScheme = z.object({
  email: z.email("Invalid email address").trim().min(1, "Email is required"),
  password: z.string().trim().min(1, "Password is required"),
});

export const RegisterSchema = z
  .object({
    email: z.email("Invalid email address").trim().min(1, "Email is required"),
    password: z
      .string()
      .trim()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().trim().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const FirstTimeSchema = z.object({
  isFirstTime: z.boolean(),
});

export type LoginInput = z.infer<typeof LoginScheme>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type FirstTime = z.infer<typeof FirstTimeSchema>;
