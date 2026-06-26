export type ApiResponse<T = void> = {
  data?: T;
  message: string;
  success: boolean;
};
