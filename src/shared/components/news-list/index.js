import React from 'react';

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
            <button onClick={ loadMore }>load more</button>
        </Styles.Container>
    );
}

export default NewsList;
