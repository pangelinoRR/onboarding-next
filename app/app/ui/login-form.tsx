"use client";

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
import { authenticate } from "@/app/lib/actions";
import { useMutation } from "@tanstack/react-query";

/**
 * Zod validation schema for the form.
 */
const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

/**
 * Form data type based on the form schema.
 */
export type LoginFormType = z.infer<typeof LoginFormSchema>;

export default function LoginForm() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: LoginFormType) => authenticate(data),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /**
   * Form submit handler.
   * Tries to authenticate, and in case of failure
   * sets the form error message.
   */
  const onSubmit = async function (data: LoginFormType) {
    mutation.mutate(data, {
      onSuccess: () => router.push("/"),
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

          {/* Login Form Error */}
          {mutation.isError && (
            <Alert severity="error">{mutation.error.message}</Alert>
          )}

          {/* Submit Button */}
          <Stack direction="row" justifyContent="end">
            <Button
              variant="contained"
              disableElevation
              size="large"
              type="submit"
              disabled={mutation.isPending}
            >
              Login
            </Button>
          </Stack>

          {/* Link to Register Page */}
          <Link
            href="/register"
            component={NextLink}
            sx={{ fontSize: 12, textAlign: "center" }}
          >
            {"Don't have an account? Register here."}
          </Link>
        </Stack>
      </Box>
    </form>
  );
}
