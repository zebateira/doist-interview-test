import urlJoin from 'proper-url-join';

import config from './config';

export default async function request({ path }) {
    const url = urlJoin(
        config.hackerNews.api.baseUrl,
        config.hackerNews.api.version,
        `${path}.json`,
    );

    const response = await fetch(url);

    if (response.status !== 200) {
        console.error(`ERROR: request failed. status code = ${response.status}`);

        return;
    }

    return response.json();
}
