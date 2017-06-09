module.exports = {
    plugins: [
        require('postcss-import')({}),
        require('postcss-mixins')({}),
        require('postcss-nested')({}),
        require('autoprefixer')({
            browsers: '> 2.5% in CZ',
            flexbox: 'no-2009'}
        ),
        require('postcss-simple-vars')({}),
        require('postcss-color-function')({}),
        require('cssnano')({
            autoprefixer: false
        })
    ]
}
