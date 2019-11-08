defmodule RecipeBook.RecipesTest do
  use RecipeBook.DataCase

  alias RecipeBook.Recipes

  describe "recipes" do
    alias RecipeBook.Recipes.Recipe

    @valid_attrs %{cook_time: "some cook_time", ingredients: [], instructions: [], name: "some name", source: "some source", total_time: "some total_time", yield: 42}
    @update_attrs %{cook_time: "some updated cook_time", ingredients: [], instructions: [], name: "some updated name", source: "some updated source", total_time: "some updated total_time", yield: 43}
    @invalid_attrs %{cook_time: nil, ingredients: nil, instructions: nil, name: nil, source: nil, total_time: nil, yield: nil}

    def recipe_fixture(attrs \\ %{}) do
      {:ok, recipe} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Recipes.create_recipe()

      recipe
    end

    test "list_recipes/0 returns all recipes" do
      recipe = recipe_fixture()
      assert Recipes.list_recipes() == [recipe]
    end

    test "get_recipe!/1 returns the recipe with given id" do
      recipe = recipe_fixture()
      assert Recipes.get_recipe!(recipe.id) == recipe
    end

    test "create_recipe/1 with valid data creates a recipe" do
      assert {:ok, %Recipe{} = recipe} = Recipes.create_recipe(@valid_attrs)
      assert recipe.cook_time == "some cook_time"
      assert recipe.ingredients == []
      assert recipe.instructions == []
      assert recipe.name == "some name"
      assert recipe.source == "some source"
      assert recipe.total_time == "some total_time"
      assert recipe.yield == 42
    end

    test "create_recipe/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Recipes.create_recipe(@invalid_attrs)
    end

    test "update_recipe/2 with valid data updates the recipe" do
      recipe = recipe_fixture()
      assert {:ok, %Recipe{} = recipe} = Recipes.update_recipe(recipe, @update_attrs)
      assert recipe.cook_time == "some updated cook_time"
      assert recipe.ingredients == []
      assert recipe.instructions == []
      assert recipe.name == "some updated name"
      assert recipe.source == "some updated source"
      assert recipe.total_time == "some updated total_time"
      assert recipe.yield == 43
    end

    test "update_recipe/2 with invalid data returns error changeset" do
      recipe = recipe_fixture()
      assert {:error, %Ecto.Changeset{}} = Recipes.update_recipe(recipe, @invalid_attrs)
      assert recipe == Recipes.get_recipe!(recipe.id)
    end

    test "delete_recipe/1 deletes the recipe" do
      recipe = recipe_fixture()
      assert {:ok, %Recipe{}} = Recipes.delete_recipe(recipe)
      assert_raise Ecto.NoResultsError, fn -> Recipes.get_recipe!(recipe.id) end
    end

    test "change_recipe/1 returns a recipe changeset" do
      recipe = recipe_fixture()
      assert %Ecto.Changeset{} = Recipes.change_recipe(recipe)
    end
  end
end
