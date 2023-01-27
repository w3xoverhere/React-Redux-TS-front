export type ThemeI = {
    mainColor: string,
    secondColor: string,
    thirdColor: string,
    mainFontColor: string,
    secondFontColor: string
}

export const lightTheme: ThemeI = {
    mainColor: 'rgba(231, 231, 231, 0)',
    secondColor: 'rgba(187, 187, 187, 0.07)',
    thirdColor: 'rgba(146, 146, 146, 0.9)',
    mainFontColor: 'black',
    secondFontColor: 'rgba(0, 0, 0, 0.74)',
}

export const darkTheme: ThemeI = {
    mainColor: 'rgba(23, 22, 22, 0.9)',
    secondColor: 'rgba(36, 36, 36, 0.9)',
    thirdColor: 'rgba(78, 62, 147, 0.9)',
    mainFontColor: 'white',
    secondFontColor: 'rgba(232, 232, 232, 0.9)'
}