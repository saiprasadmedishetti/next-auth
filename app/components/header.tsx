"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className="border-b border-slate-700">
      <div className="flex justify-between items-center container mx-auto p-4 h-[72px]">
        <h2 className="font-bold text-lg">Next Auth</h2>
        {session?.user?.image && (
          <div
            className="bg-slate-200 p-2 rounded-full"
            title={session?.user?.name as string}
          >
            <Image
              height={24}
              width={24}
              src={session.user.image}
              alt="avatar"
            />
          </div>
        )}
      </div>
    </header>
  );
}
