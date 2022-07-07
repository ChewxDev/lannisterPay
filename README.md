# lannisterPay

This project was generated with [BàngáJS](https://bangajs.netlify.app/) v1.1.0.  

## Installation

1. Install dependencies - `npm install`

2. Create a new file `.env` if it doesn't exist and copy the contents of `env.dev` into it to be able to run your server on production environment. 

3. Then you need to provide values for the configuration env files at the `src/config/env directory`.


## Running the server locally

1. Start up the server - Run `npm start` | `npm run dev`

2. Server should be running on http://localhost:2020/ by default

## Code scaffolding

Run `banga generate <type> <name>` to generate a new file types. Visit [here](https://bangajs.netlify.app/#banga-generate) for more info.

## Routes

| Routes                                                           | Description                              | Auth roles                            |
| -----------------------------------------------------------------|----------------------------------------- | ------------------------------------- |
| [POST] &nbsp; /split-payments/computesign-up                                  | Splits payment for user                      | none                                     
|