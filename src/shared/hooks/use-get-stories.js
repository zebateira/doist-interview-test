import { useState, useEffect } from 'react';

import config from '../config';
import api from '../api';

// Last item id fetched
let itemId = 0;

/*
    Validates if a story is valid. Must be:
        - of type='story'
        - not dead
        - not deleted
        - have url property
 */
export function isValidStory(item) {
    return item && item.type === 'story' && !item.dead && !item.deleted && item.url;
}

/*
    Fetches the next items givem the last id used as per the global variable itemId.

    onItemFetch: guarantees we can react as soon as an item has been fetched.
 */
export async function fetchNextItems({ onItemFetch }) {
    itemId = itemId ? itemId - 1 : await api.getMaxItem();
    const fetchItemsPromises = [];

    for (let i = 0; i < config.logic.concurrency; i += 1) {
        fetchItemsPromises.push(api.getItem({ id: itemId }).then(onItemFetch));
        itemId -= 1;
    }

    return Promise.all(fetchItemsPromises);
}

/*
    useGetStories hook.

    Automatically starts fetching stories from hacker news api.
    To trigger fetching more stories, the loadMore function can be used.
 */
export default function useGetStories() {
    // Indicates whether items are being fetched.
    // This is needed in order to avoid fetching the same items multiple times because
    // we are adding a new story each time a story finishes fetching, meaning we could be
    // triggering a render 6 times per item fetched.
    const [fetchingItems, setFetchingItems] = useState(false);
    // Stories that have been loaded so far.
    const [stories, setStories] = useState([]);
    // Dynamic maximum number of stories loaded so far.
    const [maximumStoriesToLoad, setMaximumStoriesToLoad] = useState(config.logic.maximumStoriesToLoad);

    useEffect(() => {
        async function fetchItems() {
            setFetchingItems(true);

            await fetchNextItems({
                // When each item finishes fetching, add it to the stories list if valid.
                onItemFetch: (newItem) => (
                    isValidStory(newItem) &&
                        setStories((currentStories) => currentStories.concat([newItem]))
                ),
            });

            setFetchingItems(false);
        }

        // Fetch more items only if we haven't reached the limit
        // and we are not currently fetching items
        if (stories.length <= maximumStoriesToLoad && !fetchingItems) {
            fetchItems();
        }
    }, [maximumStoriesToLoad, fetchingItems, stories]);

    function loadMore() {
        setMaximumStoriesToLoad((maximumStoriesToLoad) => (
            maximumStoriesToLoad + config.logic.loadMoreItems
        ));
    }

    return {
        stories,
        loading: stories.length <= maximumStoriesToLoad,
        loadMore,
    };
}
