import { useState, useEffect } from 'react';

function onThemeChange(callback) {
    return (event) => {
        if (!event || !event.matches) {
            return;
        }

        callback();
    };
}

export default function useSystemTheme() {
    const [theme, setTheme] = useState(null);
    const [listener, setListener] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia && !listener) {
            const matchDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
            const matchLightTheme = window.matchMedia('(prefers-color-scheme: light)');

            matchDarkTheme.addListener(onThemeChange(() => setTheme('dark')));
            matchLightTheme.addListener(onThemeChange(() => setTheme('light')));
            setListener(true);
        }

        if (
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches &&
            !theme
        ) {
            setTheme('dark');
        } else if (!theme) {
            setTheme('light');
        }
    }, [listener, theme]);

    return theme;
}
