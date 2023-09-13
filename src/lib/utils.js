import { clsx } from 'clsx';
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export async function copyToClipboard({ content }) {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(content);
    } else {
        return document.execCommand('copy', true, content);
    }
}