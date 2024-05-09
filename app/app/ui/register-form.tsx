"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Stack,
  TextField,
  Button,
  Alert,
  Typography,
  Link,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { register } from "@/app/lib/actions";

/**
 * Zod validation schema for the form.
 */
const RegisterFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  name: z.string().min(1, { message: "Name is required" }),
  password: z
    .string()
    .min(4, { message: "Password must have at least 4 characters" }),
});

/**
 * Form data type based on the form schema.
 */
export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [registerError, setRegisterError] = useState<string | null>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  /**
   * Form submit handler.
   */
  const onSubmit = async function (data: RegisterFormType) {
    setRegisterError(null);

    startTransition(async () => {
      try {
        await register(data);
        router.push("/dashboard");
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          setRegisterError(error.message);
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "borderGrey.main",
        }}
      >
        <Stack direction="column" spacing={3}>
          {/* Email */}
          <Stack direction="column" spacing={1}>
            {/* Email Input */}
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  name="email"
                  label="Email"
                  size="small"
                  error={errors?.email !== undefined}
                />
              )}
            />

            {/* Email Error */}
            {errors?.email?.message && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <ErrorIcon
                  sx={{
                    color: "error.main",
                    fontSize: 18,
                  }}
                />

                <Typography sx={{ color: "error.main", fontSize: 12 }}>
                  {errors?.email?.message}
                </Typography>
              </Stack>
            )}
          </Stack>

          {/* Name */}
          <Stack direction="column" spacing={1}>
            {/* Name Input */}
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <TextField
                  {...field}
                  type="text"
                  name="name"
                  label="Name"
                  size="small"
                  error={errors?.name !== undefined}
                />
              )}
            />

            {/* Name Error */}
            {errors?.name?.message && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <ErrorIcon
                  sx={{
                    color: "error.main",
                    fontSize: 18,
                  }}
                />

                <Typography sx={{ color: "error.main", fontSize: 12 }}>
                  {errors?.name?.message}
                </Typography>
              </Stack>
            )}
          </Stack>

          {/* Password */}
          <Stack direction="column" spacing={1}>
            {/* Password Input */}
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  name="password"
                  label="Password"
                  size="small"
                  error={errors?.password !== undefined}
                />
              )}
            />

            {/* Password Error */}
            {errors?.password?.message && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <ErrorIcon
                  sx={{
                    color: "error.main",
                    fontSize: 18,
                  }}
                />

                <Typography sx={{ color: "error.main", fontSize: 12 }}>
                  {errors?.password?.message}
                </Typography>
              </Stack>
            )}
          </Stack>

          {/* Register Form Error */}
          {registerError && <Alert severity="error">{registerError}</Alert>}

          {/* Submit Button */}
          <Stack direction="row" justifyContent="end">
            <Button
              variant="contained"
              disableElevation
              size="large"
              type="submit"
              disabled={pending}
            >
              Register
            </Button>
          </Stack>

          {/* Link to Login Page */}
          <Link
            href="/login"
            component={NextLink}
            sx={{ fontSize: 12, textAlign: "center" }}
          >
            {"Already have an account? Sign in here."}
          </Link>
        </Stack>
      </Box>
    </form>
  );
}
