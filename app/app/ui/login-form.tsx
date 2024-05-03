"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./button";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <LoginButton />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return <Button aria-disabled={pending}>Log in</Button>;
}
