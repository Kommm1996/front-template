const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss');

module.exports = {
  plugins: [prettierPluginTailwindcss],
  'prettier.singleQuote': true,
  'prettier.semi': true,
  'prettier.bracketSpacing': true,
  'prettier.printWidth': 100,
  'prettier.useEditorConfig': false,
  endOfLine: 'lf',
};
