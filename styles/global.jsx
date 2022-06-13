import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Lobster';
        src: url('/fonts/Lobster-Regular.ttf') format('truetype');
    }

    h1{
        font-family: 'Lobster';
    }
`