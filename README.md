# Pokedex Service

This service uses https://pokeapi.co/ and https://api.funtranslations.com API to create a fun application for young children.

## Hello team

My name is Saarang Tiwari and I am the developer who built this application.

## How to run the project

### Using Nodejs

1. Globally installed Nodejs -> version 12
2. Go to the root folder
3. Run command: `npm install` [Downloads all the required libraries for the project Pokedex]
4. Run command: `npm run compile-once` [Compiles the code, converts typescript into javascript]
5. Run command: `npm run start` [Runs the compiled server.js file from dist directory]
6. Load **Pokedex.postman_collection.json** from root directory in your postman and enjoy running the server

### Using Docker

1. Run Docker hub on the machine
2. Go to the root directory of the project
3. Run command: `docker build -t pokedex-docker .` [This builds the docker image]
4. Run command: `docker run -p3000:3000 pokedex-docker` [This runs the server and opens 3000(Nodejs server) port of container to 3001 port of host machine]
5. Load **Pokedex.postman_collection.json** from root directory in your postman and enjoy running the server

## APIS

**BASE_URL**: http://localhost:3000

### Health Check

- URL: **/ping**

* Request type: `GET`

- Response:
  `PONG!!`

### Get Basic Pokemon Information

- URL: **/pokemon/:name**

* url-params:
  - name: pokemon's name
* Request type: `GET`

- Response:

  ```javascript
  {
    "data": {
        "name": "mewtwo",
        "habitat": "rare",
        "isLegendary": true,
        "description": "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments."
    },
    "message": "ok",
    "error": 0
  }

  ```

### Get Translated Pokemon Information

- URL: **/pokemon/translated/:name**

* url-params:
  - name: pokemon's name
* Request type: `GET`

- Response:

  ```javascript
    {
        "data": {
            "name": "mewtwo",
            "habitat": "rare",
            "isLegendary": true,
            "description": "Created by a scientist after years of horrific gene splicing and dna engineering experiments,  it was."
        },
        "message": "ok",
        "error": 0
    }

  ```

* Meaning of error messages:

  - If the `code = 0` then it is a successful response,

  - Otherwise there is an error, check message in the response to understand the reason.

  - In the case of error data is {}

Below is an example of error:

```javascript

    {
      data: {},
      message: 'Pokemon not found',
      code: 3,
    }

```

## Running tests

- Run command: `npm run test`: This will `mocha` to run the tests.
- Unit test files are structured in the services folder along with the respected service file.
- Example file name: `filename.service.spec.ts`

## 🔧 Technologies & Tools

![](https://img.shields.io/badge/Tools-Docker-informational?style=flat&logo=docker&logoColor=white&color=2bbc8a)

![](https://img.shields.io/badge/Code-Typescript-informational?style=flat&logo=typescript&logoColor=white&color=2bbc8a)

![](https://img.shields.io/badge/Code-Nodejs-informational?style=flat&logo=node.js&logoColor=white&color=2bbc8a)

## Project Structure

- **/src**: root project folder
  - **/constants**: contains app level constants and config files
  - **controllers**: contains all the route controllers.<br />
    [ Naming convention: `filename.controller.ts` ]
  - **enums**: contains all the enums<br />
    [ Naming convention: `filename.enum.ts` ]
  - **interfaces**: contains all the interfaces<br />
    [ Naming convention: `filename.interface.ts` ]
  - **middlewares**: contains all the middlewares. Responsible for intercepting requests and performing pre api request handling tasks/checks.<br />
    [ Naming convention: `filename.middleware.ts` ]
  - **routes**: contains all the routes. Responsible for creating route endpoints and pointing to correct controller<br />
    [ Naming convention: `filename.route.ts` ]
  - **services**: contains all the services. Responsible for handling the requests and talking to 3rd part apis(PokeAPI and Translator API in this project) <br />
    [ Naming convention: `filename.service.ts` ]
  - **utils**: contains all the helper services<br />
    [ Naming convention: `filename.service.ts` ]
  - **app.ts**: Responsible for server instance creation and starting of express server
  - **server.ts**: Responsible booting nodejs and running app.ts
- **/dist**: Compiled Javascript code

## How to run the project

```

```
