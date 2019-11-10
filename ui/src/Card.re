module Styles = {
  /* Open the Css module, so we can access the style properties below without prefixing them with Css. */
  open Css;

  let card =
    style([
      display(flexBox),
      flexDirection(column),
      alignItems(stretch),
      backgroundColor(white),
      boxShadow(Theme.shadow),
      padding(Theme.basePadding),
      borderTop(px(6), solid, tomato),
    ]);

  let title =
    style([
      fontSize(rem(1.5)),
      color(Theme.textColor),
      marginBottom(Theme.basePadding),
    ]);

  let actionButton = disabled =>
    style([
      background(disabled ? darkgray : white),
      color(black),
      border(px(1), solid, black),
      borderRadius(px(3)),
    ]);
};

[@react.component]
let make = (~children) =>
  <div className=Styles.card>
    <h4 className=Styles.title> {ReasonReact.string("Hello")} </h4>
    children
  </div>;
