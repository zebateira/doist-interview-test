import config from '../config';

// Performs a single request to the Hacker News API using the Fetch API
export default async function request({ path }) {
    const url = `${config.api.baseUrl}/${config.api.version}${path}.json`;

    const response = await fetch(url);

    if (response.status !== 200) {
        console.error(`ERROR: request failed. status code = ${response.status}`);

        return;
    }

    return response.json();
}
