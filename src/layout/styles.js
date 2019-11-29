import styled, { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}

    html, body, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
    }

    body {
        background: ${(props) => props.theme.colors.background};
    }
`;

export const contentSpace = css`
    margin: 0 auto;
    max-width: 960px;
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;
`;

export const App = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.main`
    flex-grow: 2;
    ${contentSpace}
    padding-top: 0;

    color: ${(props) => props.theme.colors.text};
`;
