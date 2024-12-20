# Diginfra Docs

This website is built using [Docusaurus 2](https://v2.docusaurus.io/).

### Installation

```
nvm use
npm install
```

### Local Development

Create a file `.env` and set required environment variables. Use `.env.example`
as an example.

```
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Update the version mentioned in docs/docs/getting_started.md as some users with old brew caches don't get the latest diginfra.

Merges to master automatically update www.diginfra.khulnasoft.com

Check that the image loads on https://cards-dev.twitter.com/validator for new blog post URLs

