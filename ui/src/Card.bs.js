'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Theme$RecipeBook = require("./Theme.bs.js");

var card = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.alignItems(Css.stretch),
          /* :: */[
            Css.backgroundColor(Css.white),
            /* :: */[
              Css.boxShadow(Theme$RecipeBook.shadow),
              /* :: */[
                Css.padding(Theme$RecipeBook.basePadding),
                /* :: */[
                  Css.borderTop(Css.px(6), Css.solid, Css.tomato),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var title = Css.style(/* :: */[
      Css.fontSize(Css.rem(1.5)),
      /* :: */[
        Css.color(Theme$RecipeBook.textColor),
        /* :: */[
          Css.marginBottom(Theme$RecipeBook.basePadding),
          /* [] */0
        ]
      ]
    ]);

function actionButton(disabled) {
  return Css.style(/* :: */[
              Css.background(disabled ? Css.darkgray : Css.white),
              /* :: */[
                Css.color(Css.black),
                /* :: */[
                  Css.border(Css.px(1), Css.solid, Css.black),
                  /* :: */[
                    Css.borderRadius(Css.px(3)),
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

var Styles = {
  card: card,
  title: title,
  actionButton: actionButton
};

function Card(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: card
            }, React.createElement("h4", {
                  className: title
                }, "Hello"), children);
}

var make = Card;

exports.Styles = Styles;
exports.make = make;
/* card Not a pure module */
