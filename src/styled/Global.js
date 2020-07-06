import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
    }
    #root {
        width: 100vw;
        height: 100vh;
    }
    .App {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
`
export default Global;