// FFXIV PG ========================================================================================
'use strict';

// Script ==========================================================================================

var data = {};

function render(data, guide) {
  let difficulty_color = String.raw`data-h2-color="base(white)"`;
  if (guide.difficulty === 'hard') {
    difficulty_color = String.raw`data-h2-color="base(#f4d471)"`;
  } else if (guide.difficulty === 'savage') {
    difficulty_color = String.raw`data-h2-color="base(#ecbe6b)"`;
  } else if (guide.difficulty === 'extreme') {
    difficulty_color = String.raw`data-h2-color="base(#ee8686)"`;
  }
  return String.raw`
    <a
      href="${guide.slug}"
      title="Visit the guide for ${guide.name}."
      data-terms="${guide.terms}"
      data-h2-background="base:selectors[::before](linear-gradient(to right, black, black.6))"
      data-h2-background-position="base(center)"
      data-h2-background-size="base(cover)"
      data-h2-color="base(white)"
      data-h2-content="base:selectors[::before](' ')"
      data-h2-display="base(block) base:selectors[::before](block)"
      data-h2-height="base:selectors[::before](100%)"
      data-h2-location="base:selectors[::before](0, 0, auto, auto)"
      data-h2-opacity="base:selectors[:hover::before](.5)"
      data-h2-overflow="base(hidden)"
      data-h2-padding="base(x4, x1, x1, x1)"
      data-h2-position="base(relative) base:selectors[::before](absolute)"
      data-h2-radius="base(10px)"
      data-h2-shadow="base(medium) base:hover(larger)"
      data-h2-transform="base:hover(scale(1.015))"
      data-h2-transition="base(all .2s ease) base:selectors[::before](all .2s ease)"
      data-h2-width="base:selectors[::before](100%)"
      style="background-image: url('/static/assets/guides/${guide.img}');">
      <span
        data-h2-position="base(relative)">${guide.name}</span>
      <span
        ${difficulty_color}
        data-h2-font-size="base(.7rem)"
        data-h2-font-weight="base(800)"
        data-h2-location="base(x.75, x1, auto, auto)"
        data-h2-position="base(absolute)"
        data-h2-text-shadow="base(-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000)"
        data-h2-text-transform="base(uppercase)">
        ${guide.difficulty}
      </span>
    </a>
  `;
}

module.exports = {
  data,
  render,
};
