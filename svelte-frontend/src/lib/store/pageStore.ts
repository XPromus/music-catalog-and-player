import { writable } from "svelte/store";

export interface pageSettingsInterface {
    displayMode: DisplayMode,
    colorMode: ColorMode
}

export enum DisplayMode {
    Card,
    List
}

export enum ColorMode {
    Light,
    Dark
}

export const openPage = writable(-1);
export const pageSettings = writable({displayMode: DisplayMode.Card, colorMode: ColorMode.Dark});

