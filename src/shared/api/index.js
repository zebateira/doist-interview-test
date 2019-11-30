import request from './request';

/*
    https://github.com/HackerNews/API#max-item-id
 */
async function getMaxItem() {
    return parseInt(await request({ path: '/maxitem' }), 10);
}

function getItem({ id }) {
    return request({ path: `/item/${id}` });
}

function getItemsFromIds({ ids, mapFunction }) {
    return Promise.all(ids.map((id) => getItem({ id }).then(async (item) => {
        await mapFunction(item);

        return item;
    })));
}

export default {
    getMaxItem,
    getItem,
    getItemsFromIds,
};
