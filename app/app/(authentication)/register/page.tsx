import { Stack, Typography } from "@mui/material";
import RegisterForm from "../../ui/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
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
        Register
      </Typography>

      <RegisterForm />
    </Stack>
  );
}
