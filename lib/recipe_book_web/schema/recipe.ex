defmodule RecipeBookWeb.Schema.Recipe do
  use Absinthe.Schema.Notation

  object :recipe do
    field :id, non_null(:integer)
    field :name, non_null(:string)
    field :ingredients, non_null(list_of(:string))
    field :instructions, non_null(list_of(:string))
    field :total_time, :string
    field :cook_time, :string
    field :yield, :integer
    field :source, :string
  end
end
