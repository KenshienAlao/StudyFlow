import z from "zod";

export const TaskCreateSchema = z.object({
  title: z
    .string()
    .max(255, "Title must be at most 255 characters")
    .trim()
    .optional(),
  subject: z
    .string()
    .max(255, "Subject must be at most 255 characters")
    .trim()
    .optional(),
  notes: z
    .string()
    .max(255, "Notes must be at most 255 characters")
    .trim()
    .optional(),
  due_date: z
    .string()
    .refine((date) => new Date(date) > new Date(), {
      message: "Due date must be in the future",
    })
    .optional(),
  priority: z
    .enum(["none", "low", "medium", "high"])
    .default("none")
    .optional(),
});

export const TaskUpdateSchema = z.object({
  id: z.number().min(1, "Task ID is required"),
  title: z
    .string()
    .max(255, "Title must be at most 255 characters")
    .trim()
    .optional(),
  subject: z
    .string()
    .max(255, "Subject must be at most 255 characters")
    .trim()
    .optional(),
  due_date: z
    .string()
    .refine((date) => new Date(date) > new Date(), {
      message: "Due date must be in the future",
    })
    .optional(),
  priority: z
    .enum(["none", "low", "medium", "high"])
    .default("none")
    .optional(),
  status: z
    .enum(["pending", "in-progress", "done"])
    .default("pending")
    .optional(),
});

const NoteUpdateSchema = z.object({
  note: z.string().trim().optional(),
});

export const TaskDeleteSchema = z.number().min(1, "Task ID is required");

export type TaskCreate = z.infer<typeof TaskCreateSchema>;
export type TaskUpdate = z.infer<typeof TaskUpdateSchema>;
export type TaskDelete = z.infer<typeof TaskDeleteSchema>;
