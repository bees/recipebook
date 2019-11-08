# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :recipe_book,
  ecto_repos: [RecipeBook.Repo]

# Configures the endpoint
config :recipe_book, RecipeBookWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "aFNbUYxGJV5xbGI6w1Fpp0tCRhxE5Z7Ynod12IoZYHFCivsG5AP5Y0u2pV+OaKFf",
  render_errors: [view: RecipeBookWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: RecipeBook.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
