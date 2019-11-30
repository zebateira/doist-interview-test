import styled from 'styled-components';

import { contentSpace } from '../../shared/styles/layout';

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: ${(props) => props.theme.colors.backgroundDark};
    color: ${(props) => props.theme.colors.textLight};
`;

export const FooterContentContainer = styled.div`
    ${contentSpace}
    padding-top: 1.45rem;
    padding-bottom: 1.45rem;
`;

export const FooterLink = styled.a`
    color: ${(props) => props.theme.colors.textLight};
    text-decoration: none;
`;
