export type LoginInput = {
  email: string;
  password: string;
};

export const LoginDefaults = {
  email: "",
  password: "",
} satisfies LoginInput;

export type RegisterInput = {
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterDefaults = {
    email: "",
    password: "",
    confirmPassword: "",
} satisfies RegisterInput;