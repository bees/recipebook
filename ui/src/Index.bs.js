'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$RecipeBook = require("./App.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$RecipeBook.make, { }), "app");

/*  Not a pure module */
