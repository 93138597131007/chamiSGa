const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'resources/css/bootstrap.min.css',
    'resources/css/aos.css',
    'resources/css/main.css',
], 'public/css/main.css');

// mix.scripts([
//     'resources/js/script/aos.js', 'public/js',
//     'resources/js/script/main.js', 'public/js',
// ], 'public/js/main.js');