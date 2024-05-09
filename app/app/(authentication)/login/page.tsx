import { Metadata } from "next";
import LoginForm from "@/app/ui/login-form";
import { Stack, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <Stack direction="column" spacing={3}>
      <Typography
        component="h2"
        sx={{
          fontSize: "3rem",
          fontWeight: "500",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Login
      </Typography>

      <LoginForm />
    </Stack>
  );
}
