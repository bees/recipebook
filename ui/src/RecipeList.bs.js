'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Card$RecipeBook = require("./Card.bs.js");
var Query$ReasonApolloHooks = require("reason-apollo-hooks/src/Query.bs.js");

function RecipeList$RecipeListItem(Props) {
  var recipe = Props.recipe;
  var setRecipeId = Props.setRecipeId;
  var onClick = function (_event) {
    return Curry._1(setRecipeId, (function (param) {
                  return Caml_option.some(recipe.id);
                }));
  };
  return React.createElement(Card$RecipeBook.make, {
              children: React.createElement("div", undefined),
              title: recipe.name,
              onClick: onClick
            });
}

var RecipeListItem = {
  make: RecipeList$RecipeListItem
};

var ppx_printed_query = "query RecipeQuery  {\nrecipes  {\nid  \nname  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "recipes");
  return {
          recipes: match !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match))).map((function (value) {
                    var value$1 = Js_option.getExn(Js_json.decodeObject(value));
                    var match = Js_dict.get(value$1, "id");
                    var tmp;
                    if (match !== undefined) {
                      var value$2 = Caml_option.valFromOption(match);
                      var match$1 = Js_json.decodeNumber(value$2);
                      tmp = match$1 !== undefined ? match$1 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$2));
                    } else {
                      tmp = Js_exn.raiseError("graphql_ppx: Field id on type Recipe is missing");
                    }
                    var match$2 = Js_dict.get(value$1, "name");
                    var tmp$1;
                    if (match$2 !== undefined) {
                      var value$3 = Caml_option.valFromOption(match$2);
                      var match$3 = Js_json.decodeString(value$3);
                      tmp$1 = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                    } else {
                      tmp$1 = Js_exn.raiseError("graphql_ppx: Field name on type Recipe is missing");
                    }
                    return {
                            id: tmp,
                            name: tmp$1
                          };
                  })) : Js_exn.raiseError("graphql_ppx: Field recipes on type RootQueryType is missing")
        };
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var RecipeQueryConfig = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

var RecipesQuery = Query$ReasonApolloHooks.Make({
      query: ppx_printed_query,
      parse: parse
    });

function RecipeList(Props) {
  var setRecipeId = Props.setRecipeId;
  var match = Curry._8(RecipesQuery.use, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0);
  var simple = match[0];
  if (typeof simple === "number") {
    if (simple === /* Loading */0) {
      return React.createElement("p", undefined, "Loading...");
    } else {
      return React.createElement("p", undefined, "Get off my lawn!");
    }
  } else if (simple.tag) {
    return React.createElement("p", undefined, "Get off my lawn!");
  } else {
    return simple[0].recipes.map((function (recipe) {
                  return React.createElement(RecipeList$RecipeListItem, {
                              recipe: recipe,
                              setRecipeId: setRecipeId,
                              key: String(recipe.id)
                            });
                }));
  }
}

var make$1 = RecipeList;

exports.RecipeListItem = RecipeListItem;
exports.RecipeQueryConfig = RecipeQueryConfig;
exports.RecipesQuery = RecipesQuery;
exports.make = make$1;
/* RecipesQuery Not a pure module */
