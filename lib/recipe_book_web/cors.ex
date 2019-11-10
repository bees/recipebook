defmodule RecipeBookWeb.CORS do
  use Corsica.Router,
    origins: ["http://localhost:3000", ~r{^https?://(.*\.?)foo\.com$}],
    allow_credentials: true,
    max_age: 600

  resource("/*", origins: "*")
end
