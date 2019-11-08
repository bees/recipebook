defmodule RecipeBookWeb.Router do
  use RecipeBookWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", RecipeBookWeb do
    pipe_through :api
  end
end
