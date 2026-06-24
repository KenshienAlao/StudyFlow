import z from "zod";

export const SetupSchema = z.object({
  firstName: z.string().min(1, {message: "First Name is required"}).trim(),
  lastName: z.string().min(1, { message: "Last Name is required"}).trim(),
  dateOfBirth: z.string().min(1, { message: "Date of Birth is required"}).trim(),
  gender: z.string().min(1, { message: "Gender is required"}).trim(),
  goal: z.string().min(1, { message: "Goal is required"}).trim(),
  agreedToTermsAndConditions: z.boolean().refine((value) => value === true, { message: "Please agree to the terms and conditions" }),
})

export const UpdateScheme = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  gender: z.string().min(1, "Gender is required").trim(),
  dateOfBirth: z.string().min(1, "Date of Birth is required").trim(),
  
})

export type SetupSchema = z.infer<typeof SetupSchema>
export type UpdateScheme = z.infer<typeof UpdateScheme>