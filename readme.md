# Doist Interview Test Project (Hacker News)

## Start local development

```sh
$ npm install
$ npm start
```

## Test offline mode

To test the offline mode functionality, we need to run the final production build:

```
$ npm run build
$ npm run serve # open localhost:9000
```

## Dependencies used

- `date-fns`: to show friendly timestamps (e.g. 5 minutes ago)
- `react-waypoint`: to facilitate infinite scroll implementation
- `gatsby`: quick and efficient production build generation
- `styled-components`: css-in-js
