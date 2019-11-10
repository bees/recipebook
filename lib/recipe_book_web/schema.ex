defmodule RecipeBookWeb.Schema do
  use Absinthe.Schema
  import_types(RecipeBookWeb.Schema.Recipe)

  alias RecipeBookWeb.Resolvers

  query do
    @desc "Get all recipes"
    field :recipes, list_of(non_null(:recipe)) do
      resolve(&Resolvers.Recipe.list_recipes/3)
    end
  end
end
