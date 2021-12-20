import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    
    body {
        font-family: 'Roboto', sans-serif; 
        background-color: ${({theme}) => theme.colors.background};
    }
    
    input. button, textarea, select {
        font-family: 'Roboto', sans-serif; 
    }

    input:focus, textarea:focus, select:focus {
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.primary};

        &:hover {
            filter: opacity(0.8);
        }
    }

    .primary-color {
        color: ${({theme}) => theme.colors.primary};
        font-weight: 600;
    }

    .font-bold {
        font-weight: 700;
    }

    .h2 {
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 28px;
        color: #000;
    }

    .wallet {
        font-weight: 800;
        color: ${({theme}) => theme.colors.primary};
        font-size: 2.5rem;
        line-height: 47px;
    }
`
export default GlobalStyle