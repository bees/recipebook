defmodule RecipeBook.Recipes.Recipe do
  use Ecto.Schema
  import Ecto.Changeset

  schema "recipes" do
    field :cook_time, :string
    field :ingredients, {:array, :string}
    field :instructions, {:array, :string}
    field :name, :string
    field :source, :string
    field :total_time, :string
    field :yield, :integer

    timestamps()
  end

  @doc false
  def changeset(recipe, attrs) do
    recipe
    |> cast(attrs, [:name, :ingredients, :instructions, :yield, :cook_time, :total_time, :source])
    |> validate_required([
      :name,
      :ingredients,
      :instructions,
      :source
    ])
  end
end
