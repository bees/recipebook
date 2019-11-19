# RecipeBook

A simple application that extracts structured data (Json-LD or microdata) from
recipe blogs and serves them with a consistent display devoid of SEO
keyword-stuffing.

Core functionality is yet to be implemented. Ideally eventually you can just
point it at your pinterest recipes board or give it RSS feeds of blogs you like and it
will automatically ingest them and give you someting you can use while cooking.


# Development

## Backend

To start:
```sh
mix deps.get
# required right now unless you make changes to config/dev.exs, will enable 
# host-only development some day if someone actually wants it
docker-compose up -d 
mix ecto.setup
mix phx.server
```

Now you can visit [`localhost:4000/graphiql`](http://localhost:4000/graphiql)
from your browser.

### Schema Updates 

If you update schemas, you'll need to regenerate the schema file consumed by
the frontend.

```sh
mix absinthe.schema.json
```

## Frontend(s)

Currently there are two frontends and they are as unfininished as the backend.

The Reason codebase is the one I'd like to move forward with (better type
system, pattern matching, better styling DSL) but I'm running into issues
getting graphql working on the latest version of bs-platform.

The Typescript codebase is the fallback.

Once I've settled on one I'll document development workflow in it properly.

### Why not only use Phoenix?

Ideally I want this to be a PWA. I'm also far more comfortable writing UIs
using React so this is also just laziness on my part.
