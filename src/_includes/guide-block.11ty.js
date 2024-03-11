// FFXIV PG ========================================================================================
'use strict';

// Script ==========================================================================================

var data = {};

function render(data, guide) {
  let difficulty_color = String.raw`data-h2-color="base:all(white)"`;
  if (guide.difficulty === 'hard') {
    difficulty_color = String.raw`data-h2-color="base(#f4d471)"`;
  } else if (guide.difficulty === 'savage' || guide.difficulty === 'extreme') {
    difficulty_color = String.raw`data-h2-color="base(#ee8686)"`;
  } else if (guide.difficulty === 'ultimate' || guide.difficulty === 'unreal') {
    difficulty_color = String.raw`data-h2-color="base(#a286ee)"`;
  }
  return String.raw`
    <li 
      class="guide" 
      data-terms="${guide.terms}"
      data-h2-visually-hidden="base(visible) base:selectors[.hidden](hidden)">
      <a
        href="${guide.slug}"
        title="Visit the guide for ${guide.title}."
        data-h2-background="base:focus-visible:children[>span:first-child](focus) base:all:selectors[::before](radial-gradient(circle at 20% 80%, black, black.0))"
        data-h2-background-position="base(center)"
        data-h2-background-size="base(cover)"
        data-h2-border="base:all(1px solid black) base:all:hover(1px solid background)"
        data-h2-color="base:all(white) base:all:focus-visible:children[>span:first-child](black)"
        data-h2-content="base:selectors[::before](' ')"
        data-h2-display="base(block) base:selectors[::before](block)"
        data-h2-height="base:selectors[::before](100%)"
        data-h2-location="base:selectors[::before](0, 0, auto, auto)"
        data-h2-opacity="base:selectors[:hover::before](.8)"
        data-h2-outline="base(none) base:focus-visible(5px solid focus)"
        data-h2-overflow="base(hidden)"
        data-h2-padding="base(x4, x1, x1, x1)"
        data-h2-position="base(relative) base:selectors[::before](absolute)"
        data-h2-radius="base(10px)"
        data-h2-shadow="base(medium) base:hover(larger)"
        data-h2-text-decoration-color="base:all:focus-visible(black)"
        data-h2-transform="base:hover(scale(1.1))"
        data-h2-transition="base(outline 0s linear, color .2s ease, box-shadow .2s ease, transform .2s ease) base:selectors[::before](all .2s ease)"
        data-h2-width="base:selectors[::before](100%)"
        data-h2-z-index="base(0) base:hover(1)"
        style="background-image: url('${guide.img}');">
        <span
          data-h2-font-size="base(h6)"
          data-h2-position="base(relative)">${guide.title}</span>
        <span
          ${difficulty_color}
          data-h2-font-size="base(caption)"
          data-h2-font-weight="base(600)"
          data-h2-location="base(x.55, x1, auto, auto)"
          data-h2-position="base(absolute)"
          data-h2-text-shadow="base(-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000)"
          data-h2-font-variant-caps="base(small-caps)">
          ${guide.difficulty}
        </span>
      </a>
    </li>
  `;
}

module.exports = {
  data,
  render,
};
