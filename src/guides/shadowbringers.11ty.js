// FFXIV PG ========================================================================================

// Local data imports
const guide_data = require('../_data/guides');

// Local component imports
const guide_layout = require('../_layouts/guide.11ty');

// Page data =======================================================================================

let data = {
  pagination: {
    data: 'guide_data',
    size: 1,
  },
  guide_data: guide_data.shadowbringers,
  permalink: function (data) {
    return data.pagination.items[0].slug;
  },
};

// Script ==========================================================================================

function render(data) {
  return guide_layout.render(data, data.pagination.items[0]);
}

module.exports = {
  data,
  render,
};
