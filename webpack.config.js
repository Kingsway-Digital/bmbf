const path = require('path');
module.exports = {
    entry: [
        './helpers/helper-times.js',

        './app/static-assets/js/BMBF.js',
        './app/static-assets/js/BMBF.tracking.js',
        './app/static-assets/js/BMBF.foundation.js',
        './app/static-assets/js/BMBF.social.js',
        './app/static-assets/js/BMBF.registration.js',
        './app/static-assets/js/BMBF.advertising.js',
        './app/static-assets/js/BMBF.search.js',
        './app/static-assets/js/BMBF.nlform.js',
        './app/static-assets/js/BMBF.newsletter.js',
        './app/static-assets/js/BMBF.profile.js',
        './app/static-assets/js/BMBF.movie.js',
        './app/static-assets/js/BMBF.movienight.js',

        './app/static-assets/js/vendor/foundation/foundation.magellan.js',
        './app/static-assets/js/vendor/foundation/foundation.orbit.js',
        './app/static-assets/js/vendor/ie/redirect.js',
        './app/static-assets/js/vendor/jquery/jquery.fittext.custom.js',

    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
};
