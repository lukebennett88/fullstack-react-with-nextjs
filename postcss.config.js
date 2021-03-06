const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    tailwindcss,
    ...(process.env.NODE_ENV === `production`
      ? [
          purgecss({
            content: ['./src/**/*.js'],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }),
          autoprefixer,
          cssnano,
        ]
      : []),
  ],
};
