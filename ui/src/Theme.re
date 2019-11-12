open Css;

// TODO: figure out a nice, typed way to define scales

// scales stolen from tachyons

// font size
module FontSize = {
  let f1 = rem(3.0);
  let f2 = rem(2.25);
  let f3 = rem(1.5);
  let f4 = rem(1.25);
  let f5 = rem(1.0);
  let f6 = rem(0.875);
};

let baseFontSize = FontSize.f5;

// spacing
module Spacing = {
  let none = rem(0.0);
  let extraSmall = rem(0.25);
  let small = rem(0.5);
  let medium = rem(1.0);
  let large = rem(2.0);
  let extraLarge = rem(4.0);
  let extraExtraLarge = rem(8.0);
  let extraExtraExtraLarge = rem(16.0);
};

let baseSpacing = Spacing.medium;
let basePadding = Spacing.medium;

let textColor = black;
let shadow =
  Shadow.box(~x=px(2), ~y=px(2), ~blur=px(1), rgba(0, 0, 0, 0.05));

global("body", [background(whitesmoke)]);
