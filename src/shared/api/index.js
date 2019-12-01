/*
    API Module.
    Simple js bindings for Hacker News API
 */
import request from './request';

/*
    https://github.com/HackerNews/API#new-top-and-best-stories
*/
async function getNewStoriesIds() {
    return request({ path: '/newstories' });
}

/*
    https://github.com/HackerNews/API#items
 */
function getItem({ id }) {
    return request({ path: `/item/${id}` });
}

export default {
    getNewStoriesIds,
    getItem,
};
