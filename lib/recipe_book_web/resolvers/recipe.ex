defmodule RecipeBookWeb.Resolvers.Recipe do
  def list_recipes(_parent, _args, _resolution) do
    {:ok, RecipeBook.Recipes.list_recipes()}
  end

  def get_recipe_by_id(_parent, %{id: id}, _resolution) do
    case RecipeBook.Recipes.get_recipe(id) do
      nil ->
        {:error, "No recipe with id #{id} exists"}

      recipe ->
        {:ok, recipe}
    end
  end
end
