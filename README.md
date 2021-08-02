# Simple app to navigate through all the comics ever released

[![street-comics-api-ci](https://github.com/fnmunhoz/street-comics/actions/workflows/street-comics-api-ci.yml/badge.svg)](https://github.com/fnmunhoz/street-comics/actions/workflows/street-comics-api-ci.yml) [![street-comics-frontend-ci](https://github.com/fnmunhoz/street-comics/actions/workflows/street-comics-frontend-ci.yml/badge.svg)](https://github.com/fnmunhoz/street-comics/actions/workflows/street-comics-frontend-ci.yml)

## Initial features

Features aimed to be covered initially: [#1 - App Overview](https://github.com/fnmunhoz/street-comics/issues/1)

**Note: this app is still a work in progress.**

You can find more details about it and how it is developed via the Github [Issues](https://github.com/fnmunhoz/street-comics/issues?q=is%3Aissue) and [Pull Requests](https://github.com/fnmunhoz/street-comics/pulls?q=is%3Apr).


## Architecture overview

A Single Page Application backed by a REST API

### Backend

- Language: Ruby
- Framework: RubyOnRails
- Basic architecture: REST API

### Frontend

- Language: JavaScript
- UI Library: ReactJS
- Basic architecture: Single Page Application

## Requirements

To run the app, you will need to have the following installed on your environment:

  * [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * [docker and docker-compose](https://docs.docker.com/get-docker/)

## Cloning the app

Then clone the app via git:

```sh
git clone git@github.com:fnmunhoz/street-comics.git
```


## Starting the app.

To start the app, make sure you are inside the repository root folder and then run the following command:


```sh
docker-compose up
```

After that you should be able to open the app on the browser at the following address: http://localhost:4000


## Cleaning up

To stop and remove everything (all containers, images, and volumes), run:

```sh
docker-compose down --rmi local --volumes --remove-orphans
```

## Tests

### API tests

Run the api tests with:

```sh
docker-compose run --rm street-comics-api bin/rspec
```

### Frontend tests

Run the frontend tests with:

```sh
docker-compose run --rm street-comics-frontend npm test
```

Note, the frontend tests might show some red log messages, but some of them are expected, when running tests that stress API failures, for example.

### CI

The tests are also running via Github Actions after every git push to Github, see the results:

https://github.com/fnmunhoz/street-comics/actions


## Deploy

**Note: the app might take many seconds to respond, since the API app is using the Heroku free-tier, which puts the app to sleep when inactive. After the first load, the next ones should be fast.**

### API deploy

The API is currently deployed to Heroku after a successful push to the `main` branch.

You can access the comics endpoint at: https://street-comics-api.herokuapp.com/api/v1/comics?provider=marvel

### Frontend deploy

The frontend is currently deployed to Netlify after a successful push to the `main` branch.

You can access the app, which is connected to the API, at: https://street-comics.netlify.app