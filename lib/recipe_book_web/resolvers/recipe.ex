defmodule RecipeBookWeb.Resolvers.Recipe do
  def list_recipes(_parent, _args, _resolution) do
    {:ok, RecipeBook.Recipes.list_recipes()}
  end
end
