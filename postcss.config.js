const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ],
  webpack(config, options) {
    // https://github.com/tailwindcss/tailwindcss/pull/1058#issuecomment-518878297
    config.node = { fs: 'empty' };

    return config;
  },
}