module RecipeListItem = {
  [@react.component]
  let make = (~recipe, ~setRecipeId) => {
    let onClick = _event => {
      setRecipeId(_ => Some(recipe##id));
    };
    <Card title={React.string(recipe##name)} onClick> <div /> </Card>;
  };
};

module RecipeQueryConfig = [%graphql
  {|
  query RecipeQuery {
    recipes {
      id
      name
    }
  }
|}
];

module RecipesQuery = ReasonApolloHooks.Query.Make(RecipeQueryConfig);

[@react.component]
let make = (~setRecipeId) => {
  let (simple, _full) = RecipesQuery.use();
  switch (simple) {
  | Loading => <p> {React.string("Loading...")} </p>
  | Data(data) =>
    ReasonReact.array(
      Js.Array.map(
        recipe =>
          <RecipeListItem
            key={string_of_int(recipe##id)}
            recipe
            setRecipeId
          />,
        data##recipes,
      ),
    )
  | NoData
  | Error(_) => <p> {React.string("Get off my lawn!")} </p>
  };
};
