# Social network for developers (client) - MERN

This project was made using MREN, you can view it [here](https://developer-social-website.herokuapp.com/).

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## to clone or download (client)

```terminal
$ git clone https://github.com/halevyoren/-full-stack-social-network-client.git
$ npm i
```

# Usage (run client app on your machine)

## Prerequirements

- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)

```terminal
$ cd client   // go to client folder
$ npm install       // npm install pacakges
$ npm start // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

# Dependencies(tech-stacks)

| Client-side                           | Server-side                    |
| ------------------------------------- | ------------------------------ |
| "axios": "^0.21.1"                    | "bcryptjs": "^2.4.3"           |
| "moment": "^2.29.1"                   | "config": "^3.3.6"             |
| "react": "^17.0.2"                    | "express": "^4.17.1"           |
| "react-dom": "^17.0.2"                | "express-validator": "^6.10.0" |
| "react-icons": "^4.2.0"               | "gravatar": "^1.8.1"           |
| "react-moment": "^1.1.1"              | "jsonwebtoken": "^8.5.1"       |
| "react-redux": "^7.2.3"               | "mongoose": "^5.12.4"          |
| "react-router-dom": "^5.2.0"          | "request": "^2.88.2"           |
| "react-scripts": "4.0.3"              | "multer": "^1.4.2"             |
| "redux": "^4.0.5"                     | "cloudinary": "^1.25.1",       |
| "redux-devtools-extension": "^2.13.9" |
| "redux-thunk": "^2.3.0"               |
| "uuid": "^8.3.2"                      |
