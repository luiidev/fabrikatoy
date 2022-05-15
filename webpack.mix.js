const mix = require('laravel-mix');
const del = require('del');

require('laravel-mix-copy-watched');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

del('public/*.{js,css,ico,woff,woff2,txt}');
mix.copyWatched('resources/js/app/dist/*.{js,css,ico,woff,woff2,txt}', 'public')
    .copyWatched('resources/js/app/dist/index.html', 'resources/views/app/index.blade.php');
