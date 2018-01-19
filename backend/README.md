
# Backend Developer Assessment

## Challenge

Create an API written in Node.js that passes as many of the tests in `test/crud.spec.js` as you can. 

Data **DOES NOT** need to persist between server restarts, unless you already have extensive Node.js experience and want to show us your chops. 
In that case, we recommend using a lightweight document store like like [LokiJS](https://rawgit.com/techfort/LokiJS/master/jsdoc/tutorial-Persistence%20Adapters.html) 
or [lowdb](https://github.com/typicode/lowdb), but feel free to use anything so long as it can be installed with `npm install`.

### Requirements

1. The API should start a server on port `8080` using the `npm start` command.
1. The project should have no dependencies outside of the NPM ecosystem. That is, the only commands needed to run this project should be:
    ```
    npm install
    npm start
    npm test
    ```
1. When installing any dependencies, make sure to save them to the local `package.json` so that anyone checking out your changes can reproduce the build.
1. You may use any Node.js framework that you'd like (Express, Hapi, etc.) or none at all, and any other dependencies you find helpful.

### Setup

1. If you do not already have Node.js and NPM installed, we recommend using [NVM](https://github.com/creationix/nvm) (Lin/OSX) or [NVM-Windows](https://github.com/coreybutler/nvm-windows/releases) (Windows)
1. Install Node.js 8.9.3 or higher, with NPM 5 or higher
    * If you are using **Windows**, see the [node-gyp instructions for Windows users](https://github.com/nodejs/node-gyp#on-windows) to properly set up your environment for building native Node modules.
1. Run `npm install` to set up the dependencies for the tests included in the project
1. Run `npm start` to start the server. Currently, this will run `index.js`, which contains a barebones Node.js server that will fail all of the included tests
1. In a separate terminal tab or window, run `npm test` to run the API tests
1. Write code to make the tests pass
