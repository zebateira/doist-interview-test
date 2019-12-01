export default {
    api: {
        // Base Url of Hacker News API
        baseUrl: 'https://hacker-news.firebaseio.com',
        // API Version Prefix
        version: 'v0',
    },
    logic: {
        // Amount of requests done in parallel when fetching items from HackerNews API
        concurrency: 6,
        // Maximum number of valid stories to load on each loading process.
        // A loading process is defined by fetching items until we reached the maximumStoriesToLoad
        // limit of valid stories.
        // For example, we might need to fetch 50 items in order to get 10 valid stories.
        maximumStoriesToLoad: 20,
        // Number of items to load when loading more events on scroll
        loadMoreItems: 10,
    },
};
