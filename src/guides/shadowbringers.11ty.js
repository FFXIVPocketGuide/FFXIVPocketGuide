// FFXIV PG ========================================================================================

// Local data imports
const guide_data = require('../_data/guides');

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
  return String.raw`
    <p>${data.pagination.items[0].name}</p>
  `;
}

module.exports = {
  data,
  render,
};
