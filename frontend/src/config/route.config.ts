// Routes
export const ROUTES = {
    LANDING_PAGE: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    DASHBOARD: "/dashboard",    
} as const;

export const PUBLIC_ROUTES = [
    ROUTES.LANDING_PAGE,
    ROUTES.LOGIN,
    ROUTES.REGISTER,
] as const;
