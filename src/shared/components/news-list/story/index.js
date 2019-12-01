import React from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';

import * as Styles from './styles.js';

function Story({ index, data: { id, url, title, by, time } }) {
    const timeDuration = formatDistance(new Date(time * 1e3), new Date(), { addSuffix: true });

    return (
        <Styles.Container>
            <Styles.Index>
                { index + 1 }
            </Styles.Index>
            <Styles.Content>
                <Styles.LinkTitle href={ url }>
                    { title }
                </Styles.LinkTitle>
                <Styles.Author>
                    <span>by </span>
                    <Styles.AuthorLink href={ `https://news.ycombinator.com/user?id=${by}` }>
                        { by }
                    </Styles.AuthorLink>
                </Styles.Author>
                <Styles.TimeLink href={ `https://news.ycombinator.com/item?id=${id}` }>
                    { timeDuration }
                </Styles.TimeLink>
            </Styles.Content>
        </Styles.Container>
    );
}

Story.propTypes = {
    index: PropTypes.number.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        by: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
    }),
};

export default Story;
