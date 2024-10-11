import { createApi, createStore } from 'effector';

enum Themes {
    Light = 'Light',
    Dark = 'Dark',
}

const $isDarkTheme = createStore(false);

const api = createApi($isDarkTheme, {
    init: () => {
        const previousTheme = localStorage.getItem('theme') ?? '';
        if (previousTheme in Themes) {
            return previousTheme === Themes.Dark;
        }
        return window.matchMedia(`(prefers-color-scheme: ${Themes.Dark})`).matches;
    },
    toggleTheme: (isDarkTheme) => !isDarkTheme,
});

$isDarkTheme.on($isDarkTheme, (isDarkTheme) => {
    localStorage.setItem('theme', isDarkTheme ? Themes.Dark : Themes.Light);
    document.body.dataset.theme = Themes.Dark;
});

export const model = {
    $isDarkTheme,
    api,
};
