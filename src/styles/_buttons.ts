import { css } from 'emotion';

import { colors } from './_colors';
import { width, height } from './_sizing';

const buttonSize = (widthValue: number | 'auto') => css`
    ${width(widthValue)};
    ${height(40)};
`
const buttonColor = (bgColor: string, color: string = '#ffffff', border: string = bgColor) => css`
    background-color: ${color};
    color: ${bgColor};
    border: 2px solid ${border};
    transition: background-color 0.3s ease-in;
    &:hover {
        background-color: ${bgColor};
        color: ${color};
        border: 1px solid ${border};
    }
`

const small = css`
    ${buttonSize(100)};
`
const medium = css`
    ${buttonSize(200)};
`
const large = css`
    ${buttonSize(300)};
`
const primary = css`
    ${buttonColor(colors.primary)};
`
const secondary = css`
    ${buttonColor(colors.secondary)};
`

const smallPrimary = css`
    ${small};
    ${primary};
`

const smallSecondary = css`
    ${small};
    ${secondary};
`

const mediumPrimary = css`
    ${medium};
    ${primary};
`

const mediumSecondary = css`
    ${medium};
    ${secondary};
`

const largePrimary = css`
    ${large};
    ${primary};
`

const largeSecondary = css`
    ${large};
    ${secondary};
`

export const button = {
    small,
    medium,
    large,
    primary,
    secondary,
    smallPrimary,
    smallSecondary,
    mediumPrimary,
    mediumSecondary,
    largePrimary,
    largeSecondary
}