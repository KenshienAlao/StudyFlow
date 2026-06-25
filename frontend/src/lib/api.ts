import axios, { AxiosError } from "axios";

import { API_ENDPOINTS } from "@/config";

const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;

api.interceptors.response.use(
  (res) => {
    // error check
    if (res.data?.success === false) throw new Error(res.data.message);
    // success response
    return res.data;
  },
  async (error: AxiosError<{ message?: string }>) => {
    const req = error.config as typeof error.config & { _retry?: boolean };

    // auto token refresh: on 401/403, silently get a new access_token and replay the original request
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      req &&
      !req._retry
    ) {
      req._retry = true; // prevents infinite retry loop

      try {
        await axios.post(
          API_ENDPOINTS.AUTH.REFRESH,
          {},
          {
            withCredentials: true,
          },
        );

        return api(req);
      } catch {
        // refresh token also expired → force logout
        window.location.href = "/login?clear_session=true";
      }
    }

    // extract backend error message, fallback to axios message
    throw new Error(error.response?.data?.message ?? error.message);
  },
);
