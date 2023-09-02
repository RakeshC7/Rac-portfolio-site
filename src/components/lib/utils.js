import { clsx } from 'clszx';
import { twMerge } from "tailwind-merge";

export function cn(inputs) {
    return twMerge(clsx(inputs));
}