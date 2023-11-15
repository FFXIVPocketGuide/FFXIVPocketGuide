const { DateTime } = require('luxon');
const { hydrogen_build } = require('@hydrogen-css/hydrogen/lib/build');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    // Default values are shown:
    // Whether the live reload snippet is used
    liveReload: true,
    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: false,
    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,
    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],
    // Show local network IP addresses for device testing
    showAllHosts: false,
    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },
    // Change the default file encoding for reading/serving files
    encoding: 'utf-8',
    // Show the dev server version number on the command line
    showVersion: true,
  });
  // Add the Hydrogen configuration file as a watch target
  eleventyConfig.addWatchTarget('./hydrogen.config.json');
  // Run Hydrogen after the eleventy build executes
  eleventyConfig.on('eleventy.after', () => {
    try {
      hydrogen_build();
    } catch (error) {
      console.log(error);
    }
  });
  // Add other plugins
  eleventyConfig.addPlugin(pluginRss);
  // Create a human readable date format
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('dd LLL yyyy');
  });
  // date filter (localized)
  eleventyConfig.addNunjucksFilter('date', function (date, format, locale) {
    locale = locale ? locale : 'en';
    moment.locale(locale);
    return moment(date).format(format);
  });
  // Handle static assets
  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    './src/static/scripts/app.js': './static/scripts/app.js',
    './src/static/css/app.css': './static/css/app.css',
    './src/static/robots.txt': './robots.txt',
    './src/static/CNAME': './CNAME',
    './src/static/assets': './static/assets',
    './src/static/assets/favicons': './',
    './src/admin': './admin',
  });
  // Build the guide collections
  eleventyConfig.addCollection('arr', function (collectionApi) {
    return collectionApi.getFilteredByGlob('./src/guides/arr/**/*.11ty.js');
  });
  // Return the standard settings object
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
    templateFormats: ['11ty.js'],
  };
};
