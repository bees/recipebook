'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Card$ReasonReactExamples = require("./Card.bs.js");
var Theme$ReasonReactExamples = require("./Theme.bs.js");

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
                    "sidebar | main-content",
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
      Css.padding(Theme$ReasonReactExamples.basePadding),
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
          /* [] */0
        ]
      ]
    ]);

var Styles = {
  splitLayout: splitLayout,
  sideBar: sideBar,
  title: title,
  cardList: cardList
};

function App(Props) {
  return React.createElement("div", {
              className: splitLayout
            }, React.createElement("aside", {
                  className: sideBar
                }, React.createElement("h1", {
                      className: title
                    }, "Recipes"), React.createElement("div", {
                      className: cardList
                    }, React.createElement(Card$ReasonReactExamples.make, {
                          children: React.createElement("h1", undefined, "wow")
                        }))));
}

var make = App;

exports.Styles = Styles;
exports.make = make;
/* splitLayout Not a pure module */
