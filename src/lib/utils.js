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

export const showWelcomeMessageOnReload = () => {

    function logStyledText(text, darkMode) {
        const textColor = darkMode ? 'white' : 'black';
        console.log(`%c${text}`, `font-size: 16px; font-weight: bold; color: ${textColor};`);
    }

    // Detect user's preferred color scheme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode = darkModeMediaQuery.matches;

    logStyledText("🪄 You've unlocked the secrets of the console. Let's explore together! 🌟", isDarkMode);

};

