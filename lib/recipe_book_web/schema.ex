defmodule RecipeBookWeb.Schema do
  use Absinthe.Schema
  import_types(RecipeBookWeb.Schema.Recipe)

  alias RecipeBookWeb.Resolvers

  query do
    @desc "Get all recipes"
    field :recipes, non_null(list_of(non_null(:recipe))) do
      resolve(&Resolvers.Recipe.list_recipes/3)
    end

    @desc "Get recipe by id"
    field :recipe, non_null(:recipe) do
      arg(:id, non_null(:integer))
      resolve(&Resolvers.Recipe.get_recipe_by_id/3)
    end
  end
end
