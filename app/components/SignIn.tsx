"use client";
import { signIn } from "next-auth/react";
import Button from "./Button";

const SignIn = () => {
  return (
    <Button onClick={() => signIn()} size="md">
      SignIn
    </Button>
  );
};

export default SignIn;
