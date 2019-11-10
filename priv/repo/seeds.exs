# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     RecipeBook.Repo.insert!(%RecipeBook.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

RecipeBook.Recipes.create_recipe(%{
  name: "bad spaghetti",
  ingredients: ["box spaghetti", "water, boiling", "love"],
  instructions: ["take spaghetti out of box and put into boiling water", "pray"],
  source: "https://paulbl.art/"
})

RecipeBook.Recipes.create_recipe(%{
  name: "good spaghetti",
  ingredients: ["box spaghetti", "water, boiling", "love"],
  instructions: ["take spaghetti out of box and put into boiling water", "pray"],
  source: "https://paulbl.art/"
})

RecipeBook.Recipes.create_recipe(%{
  name: "mediocre spaghetti",
  ingredients: ["box spaghetti", "water, boiling", "love"],
  instructions: ["take spaghetti out of box and put into boiling water", "pray"],
  source: "https://paulbl.art/"
})

RecipeBook.Recipes.create_recipe(%{
  name: "lovers spaghetti",
  ingredients: ["box spaghetti", "water, boiling", "love"],
  instructions: ["take spaghetti out of box and put into boiling water", "pray"],
  source: "https://paulbl.art/"
})
