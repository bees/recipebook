'use strict';

var Css = require("bs-css/src/Css.js");

var basePadding = Css.rem(1.0);

var shadow = Css.Shadow.box(Css.px(1), Css.px(1), Css.px(1), undefined, undefined, Css.rgba(0, 0, 0, 0.05));

Css.$$global("body", /* :: */[
      Css.background(Css.whitesmoke),
      /* [] */0
    ]);

var textColor = Css.black;

exports.basePadding = basePadding;
exports.textColor = textColor;
exports.shadow = shadow;
/* basePadding Not a pure module */
