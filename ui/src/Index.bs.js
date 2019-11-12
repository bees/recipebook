'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ApolloLinks = require("reason-apollo/src/ApolloLinks.bs.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var App$RecipeBook = require("./App.bs.js");
var ReactHooks = require("@apollo/react-hooks");
var ApolloInMemoryCache = require("reason-apollo/src/ApolloInMemoryCache.bs.js");

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, /* () */0);

var httpLink = ApolloLinks.createHttpLink("http://localhost:4000/api", undefined, undefined, undefined, undefined, undefined, /* () */0);

var client = ReasonApollo.createApolloClient(httpLink, inMemoryCache, undefined, undefined, undefined, undefined, /* () */0);

ReactDOMRe.renderToElementWithId(React.createElement(ReactHooks.ApolloProvider, {
          client: client,
          children: React.createElement(App$RecipeBook.make, { })
        }), "app");

exports.inMemoryCache = inMemoryCache;
exports.httpLink = httpLink;
exports.client = client;
/* inMemoryCache Not a pure module */
