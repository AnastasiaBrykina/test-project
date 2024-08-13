import { z } from "zod";

export const signupFormSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(2, { message: "Username must be atleast 2 characters" })
      .max(20, { message: "Username must be less than 20 characters" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" })
      .max(20, { message: "Password must be less than 20 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignupFormSchema = z.infer<typeof signupFormSchema>;
