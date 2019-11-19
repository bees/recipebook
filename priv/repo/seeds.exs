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

RecipeBook.Recipes.create_recipe(%{
  ingredients: [
    "1 cup crushed tomatoes",
    "1 Tablespoon extra virgin olive oil",
    "1/4 teaspoon apple cider vinegar",
    "1 teaspoon minced garlic",
    "1 Tablespoon fresh basil, about 3-4 large leaves, sliced , plus more for garnish",
    "1 teaspoon herbs de Provence spice mix",
    "1/4 teaspoon salt",
    "1/4 teaspoon black pepper",
    "1/4 teaspoon chili powder",
    "1 medium sweet or red onion,, sliced",
    "1-2 large zucchini, (about 1 1/2 cups slices, sliced)",
    "1 large Japanese eggplant, (about 3 cups slices, sliced)",
    "3 large fresh tomatoes, (roma is best; about 3 cups slices, sliced)"
  ],
  instructions: [
    "Preheat oven to 350F. Lightly grease a 6\"x9\" baking dish and set aside. (see notes for baking in an 8\"x8\" square pan)",
    "In a medium mixing bowl, combine the crushed tomatoes, oil and vinegar. Stir in the garlic, basil, herbs de Provence, salt, pepper, and chili powder.",
    "Pour the tomato mixture into the prepared baking dish and smooth it into an even layer on the bottom of the pan.",
    "Stack the veggie slices in alternating patters (e.g.: onion, zucchini, eggplant, tomato; repeat) and place them on their side in the pan, leaning against the edge of the pan. Repeat until you've formed a couple of rows of veggies, filled the pan, and used up all of the veggie slices.",
    "Optionally, spray or brush the exposed tops of the veggies with oil to encourage browning in the oven. This is more for appearance, so feel free to skip this step if you want.",
    "Bake for about an hour, until the tomato sauce at the bottom is bubbling and the veggies are tender.",
    "Garnish with additional chopped fresh basil before serving (optional). Serve hot or cold."
  ],
  name: "Ratatouille",
  source: "https://acleanbake.com/ratatouille/"
})
