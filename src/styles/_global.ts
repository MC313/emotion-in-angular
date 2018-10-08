import { injectGlobal } from 'emotion';
import { reset } from './_reset';

export const global = () => {
    return injectGlobal`
    ${reset}
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 14px;
    }

    html,
    body {
        min-width: 320px;
        width: 100%;
        height: 100vh;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
    }

    input[type=date]::-webkit-inner-spin-button,
    input[type=time]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }

    /******************************
    Custom Styles
    ******************************/
    .wizard-step {
        display: flex;
        flex-direction: column;
    }

    .emojis {
        font-size: 8vmax;
    }

    .emoji {
        margin: 0px 20px;
        .emoji__icon {
            font-size: 6vmin;
        }
        .emoji__label {
            font-size: 3vmin;
        }
    } 
    `
}