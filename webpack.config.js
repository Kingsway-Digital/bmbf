const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: [
        // BMBF code
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

        // Vendor code
        './app/static-assets/js/vendor/foundation/foundation.magellan.js',
        './app/static-assets/js/vendor/foundation/foundation.orbit.js',
        './app/static-assets/js/vendor/ie/redirect.js',
        './app/static-assets/js/vendor/jquery/jquery.fittext.custom.js',

        // SASS
        './app/static-assets/css/components.scss',
        './app/static-assets/css/core.scss',
        './app/static-assets/css/fonts.scss'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(svg|gif|jpg|jpeg|png|eot|woff|ttf)$/,
                loader: 'url-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new OptimizeCssAssetsPlugin(),
        ],
    },
};
