import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Base path for assets in production (GitHub Pages)
export const basePath = process.env.NODE_ENV === "production" ? "/rbd-site-ai" : "";

export function getAssetPath(path: string) {
  return `${basePath}${path}`;
}
