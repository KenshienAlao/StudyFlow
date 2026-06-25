export type Task = {
  id: number;
  title: string;
  subject?: string;
  description?: string;
  due_date?: string;
  priority?: "low" | "medium" | "high";
  status?: "pending" | "in-progress" | "done";
  created_at?: string;
  updated_at?: string;
};
