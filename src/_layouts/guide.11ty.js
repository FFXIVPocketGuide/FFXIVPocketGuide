// FFXIV PG ========================================================================================
'use strict';

// Script ==========================================================================================

var data = {};

function render(data, guide) {
  // Local component imports
  const Base = require('./base.11ty');
  let children = String.raw`
    <p>A guide will appear here eventually.</p>
  `;
  return Base.render(
    data,
    guide.title,
    `/static/assets/guides/${guide.img}`,
    guide.title,
    guide.description,
    'guides',
    children
  );
}

module.exports = {
  data,
  render,
};
