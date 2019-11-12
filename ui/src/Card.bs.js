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
                  Css.hover(/* :: */[
                        Css.cursor(/* pointer */-786317123),
                        /* [] */0
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var title = Css.style(/* :: */[
      Css.color(Theme$RecipeBook.textColor),
      /* :: */[
        Css.marginBottom(Theme$RecipeBook.Spacing.small),
        /* :: */[
          Css.fontSize(Theme$RecipeBook.FontSize.f4),
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
  var title$1 = Props.title;
  var onClick = Props.onClick;
  return React.createElement("div", {
              className: card,
              onClick: onClick
            }, React.createElement("h4", {
                  className: title
                }, title$1), children);
}

var make = Card;

exports.Styles = Styles;
exports.make = make;
/* card Not a pure module */
