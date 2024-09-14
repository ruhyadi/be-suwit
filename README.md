# Suwit Backend Service

## Introduction

Suwit is a simple game that is played by one player against the computer. The player and the computer will choose one of the three options: rock, paper, or scissors. The winner is determined by the rules: rock beats scissors, scissors beats paper, and paper beats rock.

## Getting Started

### Prerequisites

We are using [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) for development. You need to have [Docker](https://docs.docker.com/engine/install/) and [Visual Studio Code](https://code.visualstudio.com/) installed on your machine. Also, you need to install the [Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) in Visual Studio Code.

### Development

1. Clone the repository and open it in Visual Studio Code

```bash
git clone https://github.com/ruhyadi/be-suwit

cd be-suwit
code .
```

2. Create docker network

```bash
docker network create be-suwit-network
```

3. Start the PostgreSQL database

```bash
make start_db
```

4. Open in the devcontainer

```bash
# Press F1 and select Remote-Containers: Reopen in Container
```

5. Install dependencies

```bash
npm install
```

6. Create/update the `.env` file

```bash
cp .env.example .env
```

7. Start the development server

```bash
npm run start:dev
```

The server will be running on `{DOMAIN}:{PORT}` (ex. `http://localhost:3000`) and the Swagger documentation will be available at `{DOMAIN}:{PORT}/api/docs` (ex. `http://localhost:3000/api/docs`).

## Acknowledgements

- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers): A development container is a running Docker container with a well-defined tool/runtime stack and its prerequisites.