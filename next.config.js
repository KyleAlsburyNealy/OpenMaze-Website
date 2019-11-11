const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withCSS(withImages({
    webpack(config, options) {
        // https://github.com/tailwindcss/tailwindcss/pull/1058#issuecomment-518878297
        config.node = { fs: 'empty' };
    
        return config;
      },
}))