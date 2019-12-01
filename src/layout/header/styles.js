import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { contentSpace } from '../../shared/styles/layout';

export const Container = styled.header`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
`;

export const Content = styled.div`
    ${contentSpace}
    padding-top: 1.45rem;
    padding-bottom: 1.45rem;
`;

export const Title = styled.h1`
    margin: 0;
`;

export const StyledLink = styled(({ className, siteTitle }) => (
    <Link to="/" className={ className }>
        {siteTitle}
    </Link>
))`
    font-weight: bold;
    font-size: 26px;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
`;
