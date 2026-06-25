export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    FORGOT_PASSWORD: "/api/auth/forgot-password",
    RESET_PASSWORD: "/api/auth/reset-password",
    REFRESH: "/api/auth/refresh",
  },
  PROFILE: {
    GET: "/api/profile",
    SETUP: "/api/profile/setup",
    UPDATE: "/api/profile/update",
  },
  SUBJECT: {
    GET: "/api/subject",
    CREATE: "/api/subject/subjectCreate",
    UPDATE: "/api/subject/subjectUpdate",
    DELETE: "/api/subject/subjectDelete",
  },
} as const;
