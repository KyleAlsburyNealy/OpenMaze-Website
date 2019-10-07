const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    webpack(config, options) {
        // https://github.com/tailwindcss/tailwindcss/pull/1058#issuecomment-518878297
        config.node = { fs: 'empty' };
    
        return config;
      },
})