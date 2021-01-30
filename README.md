# Star Wars

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

This project is a web app that visualises data from [SWAPI](https://swapi.dev/).
The app lets you navigate through Star Wars movies, characters and planets and discover details about them. It makes use of master-detail relationships in order to navigate from one element to the other.

SW uses media queries for mobile responsiveness.
The forms that let you fill in information about new elements are for demonstration purposes only as the API does not offer this functionality.
User experience is improved by the addition of a loading spinner that persists on the pages until data is loaded from the API.

## Technologies

Star Wars is created with:

- Angular 9
- Bootstrap 4
- ngBootstrap
- FontAwesome

## Setup

To run this project:

Clone repository

```
$ https://github.com/AncutaMorarasu/star-wars.git
```

Navigate to star-wars folder

```
$ cd star-wars
```

Install dependencies and run (the project runs by default on localhost, port 4200)

```
$ npm install
$ ng serve / ng serve --open
```
