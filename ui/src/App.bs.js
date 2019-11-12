'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Theme$RecipeBook = require("./Theme.bs.js");
var Recipe$RecipeBook = require("./Recipe.bs.js");
var RecipeList$RecipeBook = require("./RecipeList.bs.js");

var splitLayout = Css.style(/* :: */[
      Css.display(Css.grid),
      /* :: */[
        Css.gridTemplateColumns(/* :: */[
              Css.rem(20.0),
              /* :: */[
                Css.fr(1.0),
                /* [] */0
              ]
            ]),
        /* :: */[
          Css.gridTemplateRows(/* :: */[
                Css.fr(1.0),
                /* [] */0
              ]),
          /* :: */[
            Css.gridTemplateAreas(/* `areas */[
                  629510214,
                  /* :: */[
                    "sidebar main-content",
                    /* [] */0
                  ]
                ]),
            /* :: */[
              Css.height(/* `vh */[
                    26418,
                    100.0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var sideBar = Css.style(/* :: */[
      Css.padding(Theme$RecipeBook.Spacing.small),
      /* [] */0
    ]);

var title = Css.style(/* :: */[
      Css.marginBottom(Css.rem(1.0)),
      /* :: */[
        Css.fontSize(Css.rem(2.0)),
        /* [] */0
      ]
    ]);

var cardList = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.justifyContent(/* spaceBetween */516682146),
          /* :: */[
            Css.overflow(Css.auto),
            /* :: */[
              Css.children(/* :: */[
                    Css.marginBottom(Theme$RecipeBook.Spacing.small),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var main = Css.style(/* :: */[
      Css.gridArea(/* `ident */[
            930693872,
            "main-content"
          ]),
      /* :: */[
        Css.height(Css.pct(100)),
        /* :: */[
          Css.width(Css.pct(100)),
          /* :: */[
            Css.background(Css.white),
            /* :: */[
              Css.padding(Theme$RecipeBook.Spacing.medium),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  splitLayout: splitLayout,
  sideBar: sideBar,
  title: title,
  cardList: cardList,
  main: main
};

function App(Props) {
  var match = React.useState((function () {
          return ;
        }));
  var recipeId = match[0];
  return React.createElement("div", {
              className: splitLayout
            }, React.createElement("aside", {
                  className: sideBar
                }, React.createElement("h1", {
                      className: title
                    }, "Recipes"), React.createElement("div", {
                      className: cardList
                    }, React.createElement(RecipeList$RecipeBook.make, {
                          setRecipeId: match[1]
                        }))), React.createElement("main", {
                  className: main
                }, recipeId !== undefined ? React.createElement(Recipe$RecipeBook.make, {
                        id: recipeId
                      }) : "Click a recipe in the sidebar to get started"));
}

var make = App;

exports.Styles = Styles;
exports.make = make;
/* splitLayout Not a pure module */
