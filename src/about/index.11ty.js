// FFXIV PG ========================================================================================
'use strict';

// Local component imports
const Base = require('../_layouts/base.11ty');

// Script ==========================================================================================

var data = {};

function render(data) {
  let children = String.raw`
    <p>This page will discuss contributors, plans, etc.</p>
  `;
  return Base.render(
    data,
    'About the guide',
    'About the guide',
    'Learn more about who maintains the site, how the guide is updated, and more.',
    'about',
    children
  );
}

module.exports = {
  data,
  render,
};
