'use strict';

var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Theme$RecipeBook = require("./Theme.bs.js");
var Query$ReasonApolloHooks = require("reason-apollo-hooks/src/Query.bs.js");

var heading = Css.style(/* :: */[
      Css.fontSize(Theme$RecipeBook.FontSize.f1),
      /* :: */[
        Css.fontWeight(/* bold */-1055161979),
        /* :: */[
          Css.textTransform(/* capitalize */-509867604),
          /* :: */[
            Css.paddingBottom(Theme$RecipeBook.Spacing.medium),
            /* [] */0
          ]
        ]
      ]
    ]);

var sectionTitle = Css.style(/* :: */[
      Css.fontSize(Theme$RecipeBook.FontSize.f3),
      /* :: */[
        Css.fontWeight(/* semiBold */-812709613),
        /* :: */[
          Css.paddingBottom(Theme$RecipeBook.Spacing.medium),
          /* [] */0
        ]
      ]
    ]);

var baseList = Css.style(/* :: */[
      Css.marginLeft(Theme$RecipeBook.Spacing.large),
      /* :: */[
        Css.children(/* :: */[
              Css.marginBottom(Theme$RecipeBook.Spacing.small),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var ingredientsList = Css.merge(/* :: */[
      baseList,
      /* :: */[
        Css.style(/* :: */[
              Css.listStyleType(/* disc */-1033279659),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var instructionsList = Css.merge(/* :: */[
      baseList,
      /* :: */[
        Css.style(/* :: */[
              Css.listStyleType(/* decimal */-422333295),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var Styles = {
  heading: heading,
  sectionTitle: sectionTitle,
  baseList: baseList,
  ingredientsList: ingredientsList,
  instructionsList: instructionsList
};

function Recipe$ViewRecipe(Props) {
  var recipe = Props.recipe;
  return React.createElement("div", undefined, React.createElement("h1", {
                  className: heading
                }, recipe.name), React.createElement("h2", {
                  className: sectionTitle
                }, "Ingredients"), React.createElement("ul", {
                  className: ingredientsList
                }, recipe.ingredients.map((function (ingredient) {
                        return React.createElement("li", undefined, ingredient);
                      }))), React.createElement("h2", {
                  className: sectionTitle
                }, "Instructions"), React.createElement("ol", {
                  className: instructionsList
                }, recipe.instructions.map((function (instruction) {
                        return React.createElement("li", undefined, instruction);
                      }))));
}

var ViewRecipe = {
  Styles: Styles,
  make: Recipe$ViewRecipe
};

var ppx_printed_query = "query RecipeQuery($id: Int!)  {\nrecipe(id: $id)  {\nname  \ningredients  \ninstructions  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "recipe");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "name");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeString(value$3);
      tmp$1 = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
    } else {
      tmp$1 = Js_exn.raiseError("graphql_ppx: Field name on type Recipe is missing");
    }
    var match$3 = Js_dict.get(value$2, "ingredients");
    var match$4 = Js_dict.get(value$2, "instructions");
    tmp = {
      name: tmp$1,
      ingredients: match$3 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match$3))).map((function (value) {
                var match = Js_json.decodeString(value);
                if (match !== undefined) {
                  return match;
                } else {
                  return Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value));
                }
              })) : Js_exn.raiseError("graphql_ppx: Field ingredients on type Recipe is missing"),
      instructions: match$4 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match$4))).map((function (value) {
                var match = Js_json.decodeString(value);
                if (match !== undefined) {
                  return match;
                } else {
                  return Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value));
                }
              })) : Js_exn.raiseError("graphql_ppx: Field instructions on type Recipe is missing")
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field recipe on type RootQueryType is missing");
  }
  return {
          recipe: tmp
        };
}

function make(id, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[/* tuple */[
                    "id",
                    id
                  ]].filter((function (param) {
                      return Caml_obj.caml_notequal(param[1], null);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var id = variables.id;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[/* tuple */[
                    "id",
                    id
                  ]].filter((function (param) {
                      return Caml_obj.caml_notequal(param[1], null);
                    }))),
          parse: parse
        };
}

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var ViewRecipeConfig = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

var ViewRecipeQuery = Query$ReasonApolloHooks.Make({
      query: ppx_printed_query,
      parse: parse
    });

function Recipe(Props) {
  var id = Props.id;
  var getRecipeWithId = make(id, /* () */0);
  var match = Curry._8(ViewRecipeQuery.use, Caml_option.some(getRecipeWithId.variables), undefined, undefined, undefined, undefined, undefined, undefined, /* () */0);
  var simple = match[0];
  if (typeof simple === "number") {
    if (simple === /* Loading */0) {
      return React.createElement("p", undefined, "Loading...");
    } else {
      return React.createElement("p", undefined, "failed to fetch recipe, try searching the list again?");
    }
  } else if (simple.tag) {
    return React.createElement("p", undefined, "failed to fetch recipe, try searching the list again?");
  } else {
    return React.createElement(Recipe$ViewRecipe, {
                recipe: simple[0].recipe
              });
  }
}

var make$1 = Recipe;

exports.ViewRecipe = ViewRecipe;
exports.ViewRecipeConfig = ViewRecipeConfig;
exports.ViewRecipeQuery = ViewRecipeQuery;
exports.make = make$1;
/* heading Not a pure module */
