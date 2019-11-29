const theme = require('./src/shared/theme');

module.exports = {
    siteMetadata: {
        title: 'Doist Test Project (Hacker News)',
        description: 'Doist interview test project using Hacker News API',
        author: '@zebateira',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            /* eslint-disable camelcase */
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Doist Test Project',
                short_name: 'doist_test_project',
                start_url: '/',
                background_color: theme.colors.primary,
                theme_color: theme.colors.primary,
                display: 'minimal-ui',
                icon: 'src/images/icon.png',
            },
            /* eslint-enable camelcase */
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-styled-components',
    ],
};
