module ViewRecipe = {
  module Styles = {
    open Css;

    let heading =
      style([
        fontSize(Theme.FontSize.f1),
        fontWeight(`bold),
        textTransform(`capitalize),
        paddingBottom(Theme.Spacing.medium),
      ]);
    let sectionTitle =
      style([
        fontSize(Theme.FontSize.f3),
        fontWeight(`semiBold),
        paddingBottom(Theme.Spacing.medium),
      ]);
    let baseList =
      style([
        marginLeft(Theme.Spacing.large),
        children([marginBottom(Theme.Spacing.small)]),
      ]);
    let ingredientsList = merge([baseList, style([listStyleType(`disc)])]);
    let instructionsList =
      merge([baseList, style([listStyleType(`decimal)])]);
  };
  [@react.component]
  let make = (~recipe) => {
    <div>
      <h1 className=Styles.heading> {React.string(recipe##name)} </h1>
      <h2 className=Styles.sectionTitle> {React.string("Ingredients")} </h2>
      <ul className=Styles.ingredientsList>
        {ReasonReact.array(
           Js.Array.map(
             ingredient => <li> {React.string(ingredient)} </li>,
             recipe##ingredients,
           ),
         )}
      </ul>
      <h2 className=Styles.sectionTitle> {React.string("Instructions")} </h2>
      <ol className=Styles.instructionsList>
        {ReasonReact.array(
           Js.Array.map(
             instruction => <li> {React.string(instruction)} </li>,
             recipe##instructions,
           ),
         )}
      </ol>
    </div>;
  };
};

module ViewRecipeConfig = [%graphql
  {|
  query RecipeQuery($id: Int!) {
    recipe(id: $id) {
      name
      ingredients
      instructions
    }
  }
|}
];

module ViewRecipeQuery = ReasonApolloHooks.Query.Make(ViewRecipeConfig);

[@react.component]
let make = (~id: int) => {
  let getRecipeWithId = ViewRecipeConfig.make(~id, ());
  let (simple, _full) =
    ViewRecipeQuery.use(~variables=getRecipeWithId##variables, ());

  switch (simple) {
  | Loading => <p> {React.string("Loading...")} </p>
  | Data(data) => <ViewRecipe recipe=data##recipe />
  | NoData
  | Error(_) =>
    <p>
      {React.string("failed to fetch recipe, try searching the list again?")}
    </p>
  };
};
