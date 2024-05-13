import { logout } from "@/app/lib/actions";
import { Button, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default function TopBar() {
  return (
    <section>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ paddingY: "24px", minHeight: "80px" }}
      >
        <Typography
          variant="h1"
          sx={{
            borderBottom: "4px solid black",
            fontSize: "1.25rem",
            fontWeight: "700",
            letterSpacing: "0.2rem",
            paddingBottom: "8px",
            paddingRight: "24px",
          }}
        >
          Onboarding App
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <p>Profile</p>
          <form
            action={async (formData) => {
              "use server";

              await logout();

              /**
               * Not Working, please refresh the page.
               */
              redirect("/login");
            }}
          >
            <Button type="submit">Logout</Button>
          </form>
        </Stack>
      </Stack>
    </section>
  );
}
