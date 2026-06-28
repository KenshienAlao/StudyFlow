import { CheckCircle2, Circle, CircleDot } from "lucide-react";

export const statusConfig = {
  pending: {
    command: "pending",
    icon: Circle,
    iconClass:
      "text-muted-foreground/40 group-hover/status:text-muted-foreground/80",
    pillClass: "bg-muted/30 text-muted-foreground border-transparent",
    label: "Todo",
  },
  "in-progress": {
    command: "in-progress",
    icon: CircleDot,
    iconClass: "text-primary dark:text-primary animate-pulse",
    pillClass:
      "bg-primary/5 text-primary border-primary/20 dark:bg-primary/10 dark:text-primary",
    label: "In Progress",
  },
  done: {
    command: "done",
    icon: CheckCircle2,
    iconClass: "text-emerald-500/80 dark:text-emerald-400/80",
    pillClass:
      "bg-emerald-500/5 text-emerald-600 border-emerald-500/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
    label: "Completed",
  },
};
