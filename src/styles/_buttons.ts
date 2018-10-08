import { css } from 'emotion';

import { colors } from './_colors';
import { width, height } from './_sizing';

const buttonSize = (widthValue: number | 'auto') => css`
    ${width(widthValue)};
    ${height(40)};
`
const buttonColor = (bgColor: string, color: string = '#ffffff', border: string = bgColor) => css`
    background-color: ${bgColor};
    color: ${color};
    border: 1px solid ${border};
`

const smallButton = css`
    ${buttonSize(100)};
`
const mediumButton = css`
    ${buttonSize(200)};
`
const largeButton = css`
    ${buttonSize(300)};
`
const primaryButton = css`
    ${buttonColor(colors.primary)};
`
const secondaryButton = css`
    ${buttonColor(colors.secondary)};
`
export const button = {
    small: smallButton,
    medium: mediumButton,
    large: largeButton,
    primary: primaryButton,
    secondary: secondaryButton
}