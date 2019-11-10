open Css;

let basePadding = rem(1.0);
let textColor = black;
let shadow =
  Shadow.box(~x=px(1), ~y=px(1), ~blur=px(1), rgba(0, 0, 0, 0.05));

global("body", [background(whitesmoke)]);
