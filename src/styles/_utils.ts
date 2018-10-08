import { css } from 'emotion';
import { widthHeight } from './_sizing';

export const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const fillSpace = css`
    ${widthHeight(100, 100, '%')}
`

const flexColumn = css`
    display: flex;
    flex-direction: column;
`

const flexRow = css`
    display: flex;
    flex-direction: row;
`

export const flex = {
    column: flexColumn,
    row: flexRow
}