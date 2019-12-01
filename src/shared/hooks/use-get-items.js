import { useState, useEffect } from 'react';

import api from '../api';

// Amount of requests done in parallel when fetching items from HackerNews API
const CONCURRENCY = 6;
const INITIAL_ITEMS_LOADED = 20;

let itemId = 0;

function isValidStory(item) {
    return item && item.type === 'story' && !item.dead && !item.deleted && item.url;
}

async function fetchNextItems({ afterItemFetch }) {
    itemId = itemId ? itemId - 1 : await api.getMaxItem();
    const fetchItemsPromises = [];

    for (let i = 0; i < CONCURRENCY; i += 1) {
        fetchItemsPromises.push(api.getItem({ id: itemId }).then(afterItemFetch));
        itemId -= 1;
    }

    return Promise.all(fetchItemsPromises);
}

export default function useGetItems() {
    const [loading, setLoading] = useState(true);
    const [fetching, setFetching] = useState(false);
    const [items, setItems] = useState([]);
    const [max, setMax] = useState(INITIAL_ITEMS_LOADED);

    useEffect(() => {
        async function fetchItem() {
            setFetching(true);
            await fetchNextItems({
                afterItemFetch: (newItem) => (
                    isValidStory(newItem) && setItems((currentItems) => currentItems.concat([newItem]))
                ),
            });
            setFetching(false);
        }

        if (loading && items.length <= max && !fetching) {
            fetchItem();
        } else if (loading && items.length > max) {
            setLoading(false);
            setMax((max) => max + 10);
        }
    }, [loading, max, fetching, items]);

    return {
        items,
        loading,
        loadMore: () => {
            setLoading(true);
            setMax((max) => max + 10);
        },
    };
}
