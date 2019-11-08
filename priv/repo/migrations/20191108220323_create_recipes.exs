defmodule RecipeBook.Repo.Migrations.CreateRecipes do
  use Ecto.Migration

  def change do
    create table(:recipes) do
      add :name, :string, null: false
      add :ingredients, {:array, :text}, null: false
      add :instructions, {:array, :text}, null: false
      add :yield, :integer
      add :cook_time, :string
      add :total_time, :string
      add :source, :string, null: false

      timestamps()
    end

    constraint("recipes", :must_have_ingredients, check: "cardinality(ingredients) > 0")
    constraint("recipes", :must_have_instructions, check: "cardinality(instructions) > 0")
  end
end
