'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonReactExamples = require("./App.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonReactExamples.make, { }), "app");

/*  Not a pure module */
