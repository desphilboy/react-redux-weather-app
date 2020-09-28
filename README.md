# Iman Dezfuly solution to Services Victoria coding challenge.

## pre-requisits

to run this app, you need just the general set of fornt-end development software installed on your computer:

-   a bash compatible terminal
-   internet connection
    -git

    -node.js and npm

    -google chrome or other modern browser.

    -   create react app and typescript are used in this app.
        you might need to install prettier as well.

## install the app

    ```
    npm install
    ```

## running tests

```
npm test
```

## executing the app

```
npm start
```

you should see the app using url "localhost:3000"

## features:

-   at start brings 4 major cities weather info.
-   you can have as many cities forecasts on screen by selecting from a list or by typing city name and pressing 'Enter'
-   you can look at other cities weather by typing the name. not limited to Capital cities.
-   you can change the units into metric or Imperial.
-   you can choose countiries other than Australia
-   you can clear by pressing the X button. again country will be reset to Australia and the initial 4 major cities are fetched.
-   in case or error ( for example type a city name that does not exist) you will be provided by a dismissable error message.

-   The app is written using Typescript / React.js
-   Strong Typing is practiced quite in couple of places in the app but not all functions and components have strong typing.
-   Styled components are used for styling and css in js.
-   Redux has been used for state management.
-   Redux-Thunks is used for async side-effects and api calls.
-   React-testing library, react-test-renderer, enzyme and Jest are used in the tests
-   I provided some tests as a sample but it is not 100% covering everything.
-   the UI components are responsive ( to some degree) and app works with both large and small screens.
    -- npm run build will create a uglified (minified) production build.
