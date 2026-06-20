"use client";
import { Button, Input } from "@/components/ui";
import { ROUTES } from "@/config";
import { useLogin } from "@/hooks";
import { LoginScheme } from "@/validation";
import Link from "next/link";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const { mutate, isPending, error } = useLogin();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const validate = LoginScheme.safeParse(data);

    if (!validate.success) {
      toast.error(validate.error.issues[0].message);
      return;
    }
    mutate(validate.data);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center sm:text-left">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="text-xs font-medium text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">
            {error.message}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email Address</label>
            <Input id="email" name="email" type="email" placeholder="alex@example.com" required disabled={isPending} />
          </div>

          <div className="space-y-1">
            {/* <div className="flex items-center justify-between ">
              <label htmlFor="password" className="text-xs font-medium text-muted-foreground">Password</label>
              <Link href="/forgot-password" className="text-xs text-primary hover:underline underline-offset-4">
                Forgot?
              </Link>
            </div> */}
            <Input id="password" name="password" type="password" placeholder="Enter your password" required disabled={isPending} />
          </div>

          <Button type="submit" className="w-full mt-2" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href={ROUTES.REGISTER} className="font-medium text-primary hover:underline underline-offset-4">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}