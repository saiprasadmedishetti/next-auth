import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

export default function Button({className, ...props}: ComponentPropsWithoutRef<"button">) {
  return <button className={cn('bg-blue-600 px-5 py-2 rounded-md text-lg', className)} {...props} />;
}
