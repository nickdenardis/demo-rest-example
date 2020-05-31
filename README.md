## Deno REST example

## Install

```bash
## Install Deno
brew install deno

## Install Denon which wraps Deno with live reload ability
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts

## Clone the repository
git clone git@github.com:nickdenardis/deno-rest-example.git

## Create an environment file with your own variables
cp .env.example .env
```

## Running

1. Fill in values of `.env` for MongoDB connection
2. Compile and run (with live reload) `denon run -A --unstable index.ts` or (without live reload) `deno run -A --unstable index.ts`
3. Use `api.rest` examples with a helpful [VS Code REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Routes

- GET http://localhost:8000/recipes
- POST http://localhost:8000/recipes
- GET http://localhost:8000/recipe/{id}
- PATCH http://localhost:8000/recipe/{id}
- DELETE http://localhost:8000/recipe/{id}