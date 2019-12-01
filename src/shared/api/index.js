/*
    API Module.
    Simple js bindings for Hacker News API
 */
import request from './request';

/*
    https://github.com/HackerNews/API#max-item-id
 */
async function getMaxItem() {
    return parseInt(await request({ path: '/maxitem' }), 10);
}

/*
    https://github.com/HackerNews/API#items
 */
function getItem({ id }) {
    return request({ path: `/item/${id}` });
}

export default {
    getMaxItem,
    getItem,
};
