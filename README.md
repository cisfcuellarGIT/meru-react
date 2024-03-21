# README

This repository contains the front-end for the React with Next.js development test for Meru company. 

After generating the authentication token in the back-end, make sure to save it in the .env.local file at the root of this project.

Follow these steps:

Install packages:

yarn
Run the application:

yarn run dev
With these steps, you should be able to run the front-end locally and start working on the development test for Meru!

## Autenticación

As basic authentication with the API requires a token, you need to create one. This is a straightforward process; make a call to the endpoint to the backend:

POST
/tokens

Put the token value in the .env.local file