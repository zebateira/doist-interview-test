import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

function Header({ siteTitle }) {
    return (
        <Styles.Container>
            <Styles.Content>
                <Styles.Title>
                    <Styles.StyledLink siteTitle={ siteTitle } />
                </Styles.Title>
            </Styles.Content>
        </Styles.Container>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
