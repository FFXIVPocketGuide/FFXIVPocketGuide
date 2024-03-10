// FFXIV PG ========================================================================================
'use strict';

// Local component imports
const Base = require('../_layouts/base.11ty');

// Script ==========================================================================================

var data = {};

function render(data) {
  let children = String.raw`
    <p>This page will discuss how to become a guide writer.</p>
  `;
  return Base.render(
    data,
    'Become a contributor',
    'Become a contributor',
    'Find out how you can become a contributor to the site.',
    'contribute',
    children
  );
}

module.exports = {
  data,
  render,
};
