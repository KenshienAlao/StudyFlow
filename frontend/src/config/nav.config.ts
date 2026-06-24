import { BarChart3, BookOpen, Clock, Target } from "lucide-react";

export const NAV_ITEMS = {
    DASHBOARD: "/dashboard",
    SUBJECTS: "/dashboard/subjects",
    TASKS: "/dashboard/tasks",
    SESSIONS: "/dashboard/sessions",
    NOTES: "/dashboard/notes",
    ANALYTICS: "/dashboard/analytics",
    SETTINGS: "/dashboard/settings",
};

export const navItems = [
    { icon: BarChart3, label: "Dashboard", href: NAV_ITEMS.DASHBOARD },
    { icon: BookOpen, label: "Subjects", href: NAV_ITEMS.SUBJECTS },
    { icon: Target, label: "Tasks", href: NAV_ITEMS.TASKS },
    { icon: Clock, label: "Sessions", href: NAV_ITEMS.SESSIONS },
    { icon: BookOpen, label: "Notes", href: NAV_ITEMS.NOTES },
    { icon: BarChart3, label: "Analytics", href: NAV_ITEMS.ANALYTICS },
];
