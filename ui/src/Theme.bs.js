'use strict';

var Css = require("bs-css/src/Css.js");

var f1 = Css.rem(3.0);

var f2 = Css.rem(2.25);

var f3 = Css.rem(1.5);

var f4 = Css.rem(1.25);

var f5 = Css.rem(1.0);

var f6 = Css.rem(0.875);

var FontSize = {
  f1: f1,
  f2: f2,
  f3: f3,
  f4: f4,
  f5: f5,
  f6: f6
};

var none = Css.rem(0.0);

var extraSmall = Css.rem(0.25);

var small = Css.rem(0.5);

var medium = Css.rem(1.0);

var large = Css.rem(2.0);

var extraLarge = Css.rem(4.0);

var extraExtraLarge = Css.rem(8.0);

var extraExtraExtraLarge = Css.rem(16.0);

var Spacing = {
  none: none,
  extraSmall: extraSmall,
  small: small,
  medium: medium,
  large: large,
  extraLarge: extraLarge,
  extraExtraLarge: extraExtraLarge,
  extraExtraExtraLarge: extraExtraExtraLarge
};

var shadow = Css.Shadow.box(Css.px(2), Css.px(2), Css.px(1), undefined, undefined, Css.rgba(0, 0, 0, 0.05));

Css.$$global("body", /* :: */[
      Css.background(Css.whitesmoke),
      /* [] */0
    ]);

var baseFontSize = f5;

var baseSpacing = medium;

var basePadding = medium;

var textColor = Css.black;

exports.FontSize = FontSize;
exports.baseFontSize = baseFontSize;
exports.Spacing = Spacing;
exports.baseSpacing = baseSpacing;
exports.basePadding = basePadding;
exports.textColor = textColor;
exports.shadow = shadow;
/* f1 Not a pure module */
