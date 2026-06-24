"use client";
import { Button, Input } from "@/components/ui";
import { ROUTES } from "@/config";
import { useRegister } from "@/hooks";
import { RegisterSchema } from "@/validation";
import Link from "next/link";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const { mutate, isPending, error } = useRegister();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const validate = RegisterSchema.safeParse(data);

    if (!validate.success) {
      toast.error(validate.error.issues[0].message);
      return;
    }
    mutate(validate.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center sm:text-left">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your details below to get started</p>
        </div>

        {error && (
          <div className="text-xs font-medium text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">
            {error.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email Address</label>
            <Input id="email" name="email" placeholder="alex@example.com" type="email" required disabled={isPending} />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-xs font-medium text-muted-foreground">Password</label>
            <Input id="password" name="password" placeholder="At least 8 characters" type="password" required disabled={isPending} />
          </div>

          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="text-xs font-medium text-muted-foreground">Confirm Password</label>
            <Input id="confirmPassword" name="confirmPassword" placeholder="Repeat your password" type="password" required disabled={isPending} />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input id="agree" type="checkbox" required disabled={isPending} className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-primary" />
            <label htmlFor="agree" className="text-xs text-muted-foreground leading-normal select-none">
              I agree to the <Link href="/terms" className="underline hover:text-foreground">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>
            </label>
          </div>

          <Button type="submit" className="w-full mt-2" disabled={isPending}>
            {isPending ? "Creating account..." : "Register"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href={ROUTES.LOGIN} className="font-medium text-primary hover:underline underline-offset-4">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}