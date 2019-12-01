/*
 StoriesList component: renders the list of news items, in this case, only stories.
 */

import React from 'react';
import { Waypoint } from 'react-waypoint';

import useGetStories from '../../hooks/use-get-stories';
import Story from './story';
import * as Styles from './styles';

function StoriesList() {
    const { stories, loadMore } = useGetStories();

    return (
        <Styles.Container>
            {
                stories
                .sort((item1, item2) => item2.time - item1.time)
                .map((item, index) => (
                    <Story key={ item.id } data={ item } index={ index } />
                ))
            }
            {/* Trigger loading more stories if we are close to the end of list */}
            <Waypoint onEnter={ loadMore } bottomOffset="-60%" />
        </Styles.Container>
    );
}

export default StoriesList;
