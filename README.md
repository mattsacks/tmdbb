# TMDbB
<i>The Movie Database Browserbbbbb</i>

## Local Dev

This project uses Node for local development.

To get the latest version of Node v12, [`nvm`](https://github.com/nvm-sh/nvm) is
recommended:

```sh
nvm use 12
```

[`yarn`](https://classic.yarnpkg.com/en/docs/install#mac-stable) is used to
manage packages and run scripts. Once that's set up, the dependencies can be
installed as:

```sh
yarn install
```

To run the server locally:

```sh
yarn dev
```

## Using The Movie Database API

Once you have the project running locally, you'll need an API key from [The
Movie
Database](https://developers.themoviedb.org/3/getting-started/introduction).
Once you have an account set up, you'll want to set the **API Read Access Token
(v4 auth)** key as the `$TMDB_API_KEY` environment variable

In bash or zsh:
```zsh
export TMDB_API_KEY=[your key here]
```

In Fish:
```fish
set -Ux TMDB_API_KEY [your key here]
```

## Deployment

This project is set up on [now](https://zeit.co/home) so pushes to `master` will
automatically deploy it to [tmdbb](https://tmdbb.now.sh). Any PRs or commits
will have their own isolated deployment.
