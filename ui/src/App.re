module Styles = {
  open Css;
  let splitLayout =
    style([
      display(grid),
      gridTemplateColumns([rem(20.0), fr(1.0)]),
      gridTemplateRows([fr(1.0)]),
      gridTemplateAreas(`areas(["sidebar | main-content"])),
      height(`vh(100.0)),
    ]);
  let sideBar = style([padding(Theme.basePadding)]);
  let title = style([marginBottom(rem(1.0)), fontSize(rem(2.0))]);
  let cardList =
    style([
      display(flexBox),
      flexDirection(column),
      justifyContent(`spaceBetween),
    ]);
};

[@react.component]
let make = () => {
  <div className=Styles.splitLayout>
    <aside className=Styles.sideBar>
      <h1 className=Styles.title> {React.string("Recipes")} </h1>
      <div className=Styles.cardList>
        <Card> <h1> {ReasonReact.string("wow")} </h1> </Card>
      </div>
    </aside>
  </div>;
};
