![image](./logo.png)
[![GitHub issues](https://img.shields.io/github/issues/UIHacks2021-byke/byke-rest-api?style=for-the-badge)](https://github.com/UIHacks2021-byke/byke-rest-api/issues)
# byke REST API

 
This is a REST API for a bike hailing app



## Tech

This project uses a number of open source projects to work properly:

- [node.js](http://nodejs.org) - evented I/O for the backend
- [Express](http://expressjs.com) - fast node.js network app framework
- [Mongo DB](https://www.mongodb.com/) - A object oriented Database management system


## Installation
clone this repository
``` 
git clone git@github.com:UIHacks2021-byke/byke-rest-api.git
```
this project requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```
cd byke-rest-api
npm i
npm run start
```
## Usage

|URL Endpoint |Description                  |
|-------------|-----------------------------|
|/users       | get all users               |
|/users/:id   | get user with specific id   |
|/bicycles    | get all bicycles            |
|/bicycles/:id| get bicycle with specific id|

## Test
this project uses mocha and chai for unit test
run the following code in the terminal to carry out unit test
``` 
npm run test
```
## License

[![GitHub license](https://img.shields.io/github/license/UIHacks2021-byke/byke-rest-api?style=for-the-badge)](https://github.com/UIHacks2021-byke/byke-rest-api/blob/main/LICENSE)



