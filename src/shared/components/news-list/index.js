import React from 'react';
import { Waypoint } from 'react-waypoint';

import useGetItems from '../../hooks/use-get-items';
import Story from './story';
import * as Styles from './styles';

function NewsList() {
    const { items, loadMore } = useGetItems();

    return (
        <Styles.Container>
            {
                items
                .sort((item1, item2) => item2.time - item1.time)
                .map((item, index) => (
                    <Story key={ item.id } data={ item } index={ index } />
                ))
            }
            <Waypoint onEnter={ loadMore } bottomOffset="-60%" />
        </Styles.Container>
    );
}

export default NewsList;
