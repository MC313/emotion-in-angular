import { css } from 'emotion';

import { colors } from './_colors';
import { width, height } from './_sizing';

const inputSize = (widthValue: number | 'auto') => css`
    ${width(widthValue)};
    ${height(52)};
`

const inputColor = (color: string) => css`
    border: 1px solid ${color};
`

const smallInput = css`
    ${inputSize(100)};
`
const mediumInput = css`
    ${inputSize(200)};
`
const largeInput = css`
    ${inputSize(300)};
`
const primaryInput = css`
    ${inputColor(colors.primary)};
`
const secondaryInput = css`
    ${inputColor(colors.secondary)};
`

export const input = {
    small: smallInput,
    medium: mediumInput,
    large: largeInput,
    primary: primaryInput,
    secondary: secondaryInput
}