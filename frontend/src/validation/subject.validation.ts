import z from "zod";

export const SubjectCreateSchema = z.object({
  name: z.string().min(1, "Subject name is required").trim(),
  color: z.string().trim().optional(),
  description: z.string().trim().optional(),
});

export const SubjectUpdateSchema = SubjectCreateSchema.extend({
  id: z.number(),
});

export const SubjectDeleteSchema = z.number();

export type SubjectCreate = z.infer<typeof SubjectCreateSchema>;
export type SubjectUpdate = z.infer<typeof SubjectUpdateSchema>;
export type SubjectDelete = z.infer<typeof SubjectDeleteSchema>;
