export type LoginInput = {
  email: string;
  password: string;
};

export type RegisterInput = LoginInput & {
    confirmPassword: string;
}

export type FirstTime = {
    isFirstTime: boolean;
}
