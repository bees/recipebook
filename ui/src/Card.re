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
      hover([cursor(`pointer)]),
    ]);

  let title =
    style([
      color(Theme.textColor),
      marginBottom(Theme.Spacing.small),
      fontSize(Theme.FontSize.f4),
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
let make = (~children, ~title, ~onClick) =>
  <div className=Styles.card onClick>
    <h4 className=Styles.title> title </h4>
    children
  </div>;
