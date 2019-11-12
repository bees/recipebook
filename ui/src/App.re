module Styles = {
  open Css;
  let splitLayout =
    style([
      display(grid),
      gridTemplateColumns([rem(20.0), fr(1.0)]),
      gridTemplateRows([fr(1.0)]),
      gridTemplateAreas(`areas(["sidebar main-content"])),
      height(`vh(100.0)),
    ]);
  let sideBar = style([padding(Theme.Spacing.small)]);
  let title = style([marginBottom(rem(1.0)), fontSize(rem(2.0))]);
  let cardList =
    style([
      display(flexBox),
      flexDirection(column),
      justifyContent(`spaceBetween),
      overflow(auto),
      children([marginBottom(Theme.Spacing.small)]),
    ]);
  let main =
    style([
      gridArea(`ident("main-content")),
      height(pct(100.)),
      width(pct(100.)),
      background(white),
      padding(Theme.Spacing.medium),
    ]);
};

[@react.component]
let make = () => {
  // TODO: drive this state via routes
  let (recipeId, setRecipeId) = React.useState(() => None);

  <div className=Styles.splitLayout>
    <aside className=Styles.sideBar>
      <h1 className=Styles.title> {React.string("Recipes")} </h1>
      <div className=Styles.cardList> <RecipeList setRecipeId /> </div>
    </aside>
    <main className=Styles.main>
      {switch (recipeId) {
       | Some(id) => <Recipe id />
       | None => React.string("Click a recipe in the sidebar to get started")
       }}
    </main>
  </div>;
};
