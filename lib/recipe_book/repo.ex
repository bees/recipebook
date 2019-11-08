defmodule RecipeBook.Repo do
  use Ecto.Repo,
    otp_app: :recipe_book,
    adapter: Ecto.Adapters.Postgres
end
