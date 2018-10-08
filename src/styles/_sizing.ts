import { css } from 'emotion';

export const width = (widthValue: number | 'auto', unit: string = 'px') => css`
    min-width: ${widthValue + unit};
    width: ${widthValue + unit};
    max-width: ${widthValue + unit};
`

export const height = (heightValue: number | 'auto', unit: string = 'px') => css`
    min-height: ${heightValue + unit};
    height: ${heightValue + unit};
    max-height: ${heightValue + unit};
`

export const widthHeight = (widthValue: number | 'auto', heightValue: number | 'auto', unit: string = 'px') => css`
    ${width(widthValue, unit)}
    ${height(heightValue, unit)}
`;