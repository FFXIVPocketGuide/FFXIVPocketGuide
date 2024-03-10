// FFXIV PG ========================================================================================
'use strict';

// Local component imports
const Base = require('./base.11ty');

// Script ==========================================================================================

var data = {};

function render(data, guide) {
  let children = String.raw`
    <p>A guide will appear here eventually.</p>
  `;
  return Base.render(data, guide.title, guide.title, guide.description, 'guide', children);
}

module.exports = {
  data,
  render,
};
