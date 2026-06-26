export type Task = {
  id?: number;
  title?: string;
  subject?: string;
  notes?: string;
  due_date?: string;
  priority?: "none" | "low" | "medium" | "high";
  status?: "pending" | "in-progress" | "done";
  created_at?: string;
  updated_at?: string;
};
