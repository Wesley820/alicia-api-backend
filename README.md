<p align="center">
  <img src="./.github/bot.gif" width="220" height="220"/>
</p>

# Alícia virtual assistant

### Backend of a virtual assistant focused on psychology.

# Technologies

- [Node.Js](https://nodejs.org/en/)
- [Adonis.Js](https://adonisjs.com/)

# Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- Adonis.Js CLI

I'll start with the assumption that you already have the programs installed, but if you don't, just follow the guides on the official websites of [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

To install the Adonis CLI, run the following command on your terminal

```
yarn global install @adonisjs/cli
```

# Cloning the repository

To continue cloning this repository on your machine by copying the repository link and running commands below on your terminal

```cmd
git clone https://github.com/Wesley820/alicia-api-backend.git
cd alicia-api-backend
yarn
```

# Settings

Before starting the server it is necessary to place some environment variables so copy and paste the .env.example file and rename it to .env and then in this file just put the Watson assistant access credentials in WATSON_APIKEY, WATSON_URL and WATSON_ASSISTANT_ID, that is enough run the following command on your terminal:

```cmd
yarn start
```

# Development

With everything installed, we will now go to development, below is the features with their repective methods, answers and errors

## Methods

API requests must follow the standards:
| Method | Description |
|---|---|
| `POST` | Used to create a new record or send new information. |

## Response

| status code | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| `200`       | Successfully executed request.                                       |
| `400`       | Validation errors or the fields provided do not exist in the system. |
| `500`       | Internal server error                                                |

# Chat

## Session[POST]

In order to be able to send messages it is necessary to have a session id with the following request:

> POST - http://localhost:3333/chat/session

- Response 201
- Body

```json
{
  "session_id": "19bc5186-2e46-46d4-8f7b-e65597fa6092"
}
```

## Message[POST]

- Request

> POST - http://localhost:3333/chat/message

- headers

| Parameters   | Description             |
| ------------ | ----------------------- |
| `session_id` | conversation session id |

- Body

| Parameters | Description                             |
| ---------- | --------------------------------------- |
| `message`  | Message that will be sent to the server |

- Response 200
- Body

```json
[
  {
    "response_type": "text",
    "text": "Olá, em que posso te ajudar?"
  }
]
```
