defmodule RecipeBook.Parser do
  def parse_from_url(url) do
    with {:ok, document} <- Microdata.parse(url: url),
         {microdata, withProtocol?} <- get_recipe_microdata(document) do
      from_recipe_microdata(microdata, withProtocol?)
    else
      {:error, reason} -> {:error, reason}
    end
  end

  def get_recipe_microdata(document) do
    cond do
      Enum.empty?(res = Microdata.Document.lookup(document, "http://schema.org/Recipe")) == false ->
        [microdata | _] = res
        {microdata, true}

      Enum.empty?(res = Microdata.Document.lookup(document, "//schema.org/Recipe")) == false ->
        [microdata | _] = res
        {microdata, false}

      true ->
        {:error, :no_microdata}
    end
  end

  defmodule Recipe do
    @enforce_keys [:name, :ingredients, :instructions]
    defstruct [:name, :ingredients, :instructions, :cook_time, :total_time, :yield]
  end

  def from_recipe_microdata(item, withProtocol?) do
    # TODO: using interpolation to omit the prefix feels like an ugly hack
    prefix = (withProtocol? && "http:") || ""

    ingredients =
      cond do
        Enum.empty?(
          flattened = flatten_item_properties(item, "#{prefix}//schema.org/recipeIngredient")
        ) == false ->
          flattened

        Enum.empty?(
          flattened = flatten_item_properties(item, "#{prefix}//schema.org/ingredients")
        ) == false ->
          flattened

        true ->
          []
      end

    instructions =
      case flatten_item_properties(item, "#{prefix}//schema.org/recipeInstructions") do
        howToSteps = [%Microdata.Item{} | _] ->
          howToSteps
          |> Enum.flat_map(fn item ->
            flatten_item_properties(item, "#{prefix}//schema.org/text")
          end)

        text ->
          text
      end

    %Recipe{
      name:
        Enum.at(
          flatten_item_properties(item, "#{prefix}//schema.org/name"),
          0,
          "Couldn't get the recipe name"
        ),
      ingredients: ingredients,
      instructions: instructions,
      yield:
        Enum.at(
          flatten_item_properties(item, "#{prefix}//schema.org/recipeYield"),
          0
        ),
      cook_time:
        Enum.at(
          flatten_item_properties(item, "#{prefix}//schema.org/cookTime"),
          0
        ),
      total_time:
        Enum.at(
          flatten_item_properties(item, "#{prefix}//schema.org/cookTime"),
          0
        )
    }
  end

  defp flatten_item_properties(item, property) do
    item
    |> Microdata.Item.lookup(property)
    |> Enum.map(fn %Microdata.Property{value: value} -> value end)
  end
end
