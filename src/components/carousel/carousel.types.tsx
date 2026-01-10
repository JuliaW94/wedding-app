export type Item = {
    Name: string,
    Caption: string,
    contentPosition: "left" | "right" | "middle",
    Items: {Name: string, Image?: string}[]
}

export interface BannerProps
{
    item: Item,
    contentPosition: "left" | "right" | "middle",
    length?: number,

}

export interface SettingsT {
    autoPlay: boolean,
    animation: "fade" | "slide",
    indicators: boolean,
    duration: number,
    navButtonsAlwaysVisible: boolean,
    navButtonsAlwaysInvisible: boolean,
    fullHeightHover: boolean,
    cycleNavigation: boolean,
    swipe: boolean,
    [key: string]: any
}

export const DefaultSettingsT: SettingsT = {
    autoPlay: true,
    animation: "slide",
    indicators: false,
    duration: 1500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: true,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true
}