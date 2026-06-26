import z from "zod";

export const TaskCreateSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be at most 255 characters")
    .trim(),
  subject: z
    .string()
    .max(255, "Subject must be at most 255 characters")
    .trim()
    .optional(),
  description: z
    .string()
    .max(255, "Description must be at most 255 characters")
    .trim()
    .optional(),
  due_date: z
    .string()
    .refine((date) => new Date(date) > new Date(), {
      message: "Due date must be in the future",
    })
    .optional(),
  priority: z.enum(["low", "medium", "high"]).default("medium").optional(),
});

export const TaskUpdateSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be at most 255 characters")
    .trim()
    .optional(),
  subject: z
    .string()
    .max(255, "Subject must be at most 255 characters")
    .trim()
    .optional(),
  description: z
    .string()
    .max(255, "Description must be at most 255 characters")
    .trim()
    .optional(),
  due_date: z
    .string()
    .refine((date) => new Date(date) > new Date(), {
      message: "Due date must be in the future",
    })
    .optional(),
  priority: z.enum(["low", "medium", "high"]).default("medium").optional(),
  status: z
    .enum(["pending", "in-progress", "done"])
    .default("pending")
    .optional(),
});

export const TaskDeleteSchema = z.object({
  id: z.number().min(1, "Task ID is required"),
});

export type TaskCreate = z.infer<typeof TaskCreateSchema>;
export type TaskUpdate = z.infer<typeof TaskUpdateSchema>;
export type TaskDelete = z.infer<typeof TaskDeleteSchema>;
