import { css } from 'emotion';


const sizing = {
    xs: 0.8,
    sm: 1.2,
    md: 1.6,
    lg: 1.8,
    xl: 2.4
}

const setFontSize = (size: number, unit: string = 'rem') => css`
    font-size: ${size}${unit};
`

const setFontColor = (color: string) => css`
    color: ${color};
`

export const setFont = (size: number, unit: string, color: number) => css`
    
`
export const font = {
    xs: css`font-size: ${sizing.xs}rem`,
    sm: css`font-size: ${sizing.sm}rem`,
    md: css`font-size: ${sizing.md}rem`,
    lg: css`font-size: ${sizing.lg}rem`,
    xl: css`font-size: ${sizing.xl}rem`
}
