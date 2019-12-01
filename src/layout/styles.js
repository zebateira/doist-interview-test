import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { transitionTheme } from '../shared/styles/animations';

export const GlobalStyles = createGlobalStyle`
    ${reset}

    html, body, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        font-family: Verdana, Geneva, sans-serif;

        ${transitionTheme};
    }
`;

export const App = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.main`
    flex-grow: 2;
    padding-top: 0;
`;
