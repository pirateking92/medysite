import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import FormData from "@/components/Contact";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
