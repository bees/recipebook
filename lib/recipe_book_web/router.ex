defmodule RecipeBookWeb.Router do
  use RecipeBookWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through(:api)

    forward "/graphiql",
            Absinthe.Plug.GraphiQL,
            schema: RecipeBookWeb.Schema

    forward "/api", Absinthe.Plug, schema: RecipeBookWeb.Schema
  end
end
