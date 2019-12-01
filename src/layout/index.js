/*
    Layout.

    Generic layout that all pages should use.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import theme from '../shared/theme';
import useSystemTheme from '../shared/hooks/use-system-theme';
import Header from './header';
import Footer from './footer';
import * as Styles from './styles';

function Layout({ children }) {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    const systemTheme = useSystemTheme();

    return (
        <ThemeProvider theme={ theme[systemTheme || 'light'] }>
            <>
                <Styles.GlobalStyles />
                <Styles.App id="app">
                    <Header siteTitle={ data.site.siteMetadata.title } />
                    <Styles.Main>
                        {children}
                    </Styles.Main>
                    <Footer />
                </Styles.App>
            </>
        </ThemeProvider>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
