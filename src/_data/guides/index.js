// FFXIV PG ========================================================================================
'use strict';

// Local data imports
const expansions = require('../expansions');

// Vendor imports
var path = require('path');
const { glob } = require('glob');
var slugify = require('slugify');

// Script ==========================================================================================

// Create an object to store the guide data
let guide_data = {};
try {
  // Loop through the expansion data so that we can grab guides by expac
  for (var key in expansions) {
    // Create an array to store each guide within the expac
    let data = [];
    // Grab the files found in the expac's directory
    let files = glob.sync(
      path.resolve(process.cwd(), `./src/_data/guides/${expansions[key].path}/**/*.json`)
    );
    // Loop through the files, get their individual data, and store it
    files.forEach((file) => {
      let guide = require(file);
      guide.slug = `/guides/${key}/${slugify(guide.title, { lower: true })}/`;
      let bosses = String.raw``;
      guide.bosses.forEach((boss, index, array) => {
        if (index === array.length - 1 && array.length > 1) {
          bosses = bosses + String.raw`and ${boss.name}`;
        } else if (array.length === 1) {
          bosses = bosses + String.raw`${boss.name}`;
        } else {
          bosses = bosses + String.raw`${boss.name}, `;
        }
      });
      guide.description = String.raw`Read the guide for the FFXIV ${guide.type} ${guide.title} (${
        guide.difficulty[0].toUpperCase() + guide.difficulty.substring(1)
      }), where you'll face off against ${bosses}.`;
      data = data.concat(guide);
    });
    // Sort the expac's guide data by their order value and then add the expac to the guide data object
    guide_data[key] = data.sort((a, b) => parseFloat(b.order) - parseFloat(a.order));
  }
} catch (error) {
  console.log(error);
}

module.exports = guide_data;
