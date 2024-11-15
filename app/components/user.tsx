"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "./button";

export default function User() {
  const { data: session, status } = useSession();

  return (
    <div className="container flex flex-col gap-4 items-start mx-auto p-4">
      {session ? (
        <>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <h2>
                Signed in as{" "}
                <span className="font-semibold">{session.user?.name}</span>
              </h2>
              {session.user?.image && (
                <Image
                  className="rounded-full"
                  height={20}
                  width={20}
                  src={session.user.image}
                  alt="avatar"
                />
              )}
            </div>
            <div className="flex">Email : <span className="font-semibold ml-1">{session.user?.email}</span></div>
          </div>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : status === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        <>
          Please sign in <br />
          <Button onClick={() => signIn()}>Sign in</Button>
        </>
      )}
    </div>
  );
}
