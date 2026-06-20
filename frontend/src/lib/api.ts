import axios, { AxiosError } from "axios";
import { API_ENDPOINTS } from "@/config";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) throw new Error("Missing NEXT_PUBLIC_API_URL");

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (res) => {
    // GLOBAL SUCCESS TRANSLATION
    // If backend returns 200 OK but success is false, throw it as an error to React Query.
    if (res.data?.success === false) return Promise.reject(new Error(res.data.message));
    return res.data;
  },
  async (error: AxiosError) => {
    const req = error.config as any;

    // INVISIBLE TOKEN REFRESH
    // Ceiling: concurrent 401s trigger multiple refresh API calls. 
    // Add a Promise lock/queue here if race conditions become an issue.
    if (error.response?.status === 401 && !req._retry) {
      req._retry = true;
      try {
        await axios.post(`${BASE_URL}${API_ENDPOINTS.AUTH.REFRESH}`, {}, { withCredentials: true });
        return api(req); // Automatically replays the exact GET/POST/DELETE request
      } catch {
        // If the 7-day refresh token also expires, add global force logout:
        window.location.href = '/login';
      }
    }

    // GLOBAL ERROR EXTRACTION
    const backendMessage = (error.response?.data as any)?.message;
    return Promise.reject(new Error(backendMessage));
  }
);