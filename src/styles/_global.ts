import { injectGlobal } from 'emotion';
import { reset } from './_reset';

export const global = () => {
    return injectGlobal`
    ${reset}
    * {
        box-sizing: border-box;
    }

    html {
        text-size: 14px;
    }

    html,
    body {
        min-width: 320px;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    input[type=date],
    input[type=time] {
        padding-left: 0px;
        text-align: center;
    }

    input[type=date]::-webkit-inner-spin-button,
    input[type=time]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }
    `
}