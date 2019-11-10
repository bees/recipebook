const { override, addBabelPresets } = require("customize-cra");

module.exports = override(...addBabelPresets("@emotion/babel-preset-css-prop"));
