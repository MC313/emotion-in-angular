import { css } from 'emotion';

import { colors } from './_colors';
import { width, height } from './_sizing';
import { text } from './_typography';

const inputBase = css`
    ${height(52)};
    ${text.md};
    padding-left: 20px;
    label: input;
`

const inputSize = (widthValue: number | 'auto') => css`
    ${inputBase};
    ${width(widthValue)};
`

const inputColor = (color: string) => css`
    border: 1px solid ${color};
`

const small = css`
    ${inputSize(100)};
`
const medium = css`
    ${inputSize(200)};
`
const large = css`
    ${inputSize(300)};
`
const primaryColor = css`
    ${inputColor(colors.primary)};
    &:focus {
        border: 1px solid ${colors.primary};
    }
`
const secondaryColor = css`
    ${inputColor(colors.secondary)};
    &:focus {
        border: 1px solid ${colors.primary};
    }
`

const smallPrimary = css`
    ${small};
    ${primaryColor};
`

const smallSecondary = css`
    ${small};
    ${secondaryColor};
`

const mediumPrimary = css`
    ${medium};
    ${primaryColor};
`

const mediumSecondary = css`
    ${medium};
    ${secondaryColor};
`

const largePrimary = css`
    ${large};
    ${primaryColor};
`

const largeSecondary = css`
    ${large};
    ${secondaryColor};
`

export const input = {
    small,
    medium,
    large,
    primary: primaryColor,
    secondary: secondaryColor,
    smallPrimary,
    smallSecondary,
    mediumPrimary,
    mediumSecondary,
    largePrimary,
    largeSecondary
}