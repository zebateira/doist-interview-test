import axios from 'axios';
import urlJoin from 'proper-url-join';

import config from './config';

const cache = {};

// TODO: Deal with hackernews api failing
export default async function request({ path, ...params }) {
    const requestParams = {
        method: 'get',
        url: urlJoin(
            config.hackerNews.api.baseUrl,
            config.hackerNews.api.version,
            `${path}.json`,
        ),
        ...params,
    };

    const cacheHit = cache[JSON.stringify(requestParams)];

    if (cacheHit) {
        return cacheHit;
    }

    const response = await axios(requestParams);

    cache[JSON.stringify(requestParams)] = response.data;

    return response.data;
}
