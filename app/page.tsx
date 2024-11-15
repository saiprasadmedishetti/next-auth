"use client";
import { SessionProvider } from "next-auth/react";
import User from "./components/user";
import Header from "./components/header";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <User />
    </SessionProvider>
  );
}
