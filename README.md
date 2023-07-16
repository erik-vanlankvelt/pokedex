# Pokedex

Technical assessment for PrizePicks front end knowledge and development style.

## Table of Contents

-   [The Problem](#the-problem)
-   [Business Requirements](#business-requirements)
-   [Technical Requirements](#technical-requirements)
-   [Bonus Points](#bonus-points)
-   [Setup](#setup)
-   [Linting and Formatting](#linting-and-formatting)
-   [Testing](#testing)
-   [Not Completed](#not-completed)
-   [Additional Changes](#additional-changes)

## The Problem

Ash and his friends are on a new adventure to catch even more Pokemon! Before they set off on this journey they need some tools. As we all know every great Pokemon trainer needs a reliable Pokedex to identify Pokemon. It’s a good thing they have you! Ash has asked if you would be willing to build him a brand new Pokedex with core features and a couple of enhancements.

## Business Requirements

-   Use the Pokemon API to make API requests for data [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2).
-   Able to search for any Pokemon.
-   Able to see a history of what has been searched and revisit at anytime.

## Technical Requirements

-   You are allowed to use scaffolding technology like “Create React App” or similar.
-   This project should be done with the latest React framework.
-   This project should be done with the latest Redux framework.
-   This project should be done using TypeScript.
-   This project should be done using version control, preferably git.
-   This project can be styled with SCSS/CSS or Styled Components if anything needs to be styled.
-   This project should include a README that addresses anything you may not have completed. It should also address what additional changes you might need to make if the application were intended to run in a concurrent environment. Any other comments or thoughts about the project are also welcome.

## Bonus Points

-   Able to see details about abilities, moves, species, sprites and types upon searching.
-   Able to see other evolutions of Pokemon and be able to navigate to specific Pokemon in the evolution chain.
-   A sleek and intuitive layout that resembles a Pokedex.
-   Automated tests that ensure the business logic implemented is correct.

## Setup

##### Install homebrew (if not done already)

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

##### Install node (if not done already)

```
brew install node
```

##### Install npm modules

```
npm install
```

##### Run project locally

```
npm start
```

## Linting and Formatting

TypeScript Linting:

```
npm run lint:ts
```

Format files using Prettier:

```
npm run format
```

## Testing

Run tests:

```
npm run test
```

## Additional Changes

The following are some additional changes that I would make:

1. Move the saved search history from Local Storage to Cookies. It would not be a good user experience to have to manually open dev tools and clear Local Storage.

2. Run the linting and tests as part of a CI/CD pipeline.

3. Add a loading state to display to the user during asynchronous processes.

4. Add alerts to display to the user when errors occur.

5. Add additional routing for more views.

6. Utilize more of the API endpoints, add to api, reducers, sagas, etc.

7. Not sure if I would use Material UI in a final project. I did for this exercise as I was able to quickly create a UI out of the box.

8. In a concurrent environment, I would most likely set params per environment via Docker and K8s.

9. Write more tests!

10. Add caching. Might even pre-fetch data prior to display, like for the Pokemon details.

11. Display a placeholder preview of content before the data gets loaded.
