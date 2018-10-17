import { css } from 'emotion';

import { colors } from './_colors';

const sizing = {
    xs: 0.8,
    sm: 1.2,
    md: 1.6,
    lg: 1.8,
    xl: 2.4
}

const xs = css`
    font-size: ${sizing.xs}rem;
`
const sm = css`
    font-size: ${sizing.sm}rem;
`
const md = css`
    font-size: ${sizing.md}rem;
`
const lg = css`
    font-size: ${sizing.lg}rem;
`
const xl = css`
    font-size: ${sizing.xl}rem;
`
const primary = css`
    color: ${colors.primary};
`
const secondary = css`
    color: ${colors.secondary};
`
const xsPrimary = css`
    ${xs};
    ${primary};
`
const smPrimary = css`
    ${sm};
    ${primary};
`
const mdPrimary = css`
    ${md};
    ${primary};
`
const lgPrimary = css`
    ${lg};
    ${primary};
`
const xlPrimary = css`
    ${xl};
    ${primary};
`
const xsSecondary = css`
    ${xs};
    ${secondary};
`
const smSecondary = css`
    ${sm};
    ${secondary};
`
const mdSecondary = css`
    ${md};
    ${secondary};
`
const lgSecondary = css`
    ${lg};
    ${secondary};
`
const xlSecondary = css`
    ${xl};
    ${secondary};
`
export const setText = (size: number, unit: string, color: number) => css``

export const text = {
    xs,
    sm,
    md,
    lg,
    xl,
    primary,
    secondary,
    xsPrimary,
    smPrimary,
    mdPrimary,
    lgPrimary,
    xlPrimary,
    xsSecondary,
    smSecondary,
    mdSecondary,
    lgSecondary,
    xlSecondary
}
