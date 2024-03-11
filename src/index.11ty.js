// FFXIV PG ========================================================================================
'use strict';

// Script ==========================================================================================

var data = {};

function render(data) {
  // Local data imports
  const expansions = require('./_data/expansions');
  // Local component imports
  const Base = require('./_layouts/base.11ty');
  const GuideBlock = require('./_includes/guide-block.11ty');
  const guide_data = require('./_data/guides');
  let guide_markup = String.raw``;
  for (var key in expansions) {
    if (guide_data[key].length > 0) {
      let expac_guides = String.raw`
      <details 
        open 
        class="guide-wrapper"
        data-h2-content="base:children[summary::marker]('+') base:selectors[[open]]:children[summary::marker]('−')"
        data-h2-display="base(block)"
        data-h2-margin="base(x2, 0, 0, 0)"
        data-h2-visually-hidden="base(visible) base:selectors[.hidden](hidden)">
        <summary
          data-h2-cursor="base(pointer)"
          data-h2-margin="base(0, 0, x.5, 0)">
          <h2 
            id="${key}"
            data-h2-display="base(inline-block)"
            data-h2-font-family="base('Cinzel', sans-serif)"
            data-h2-font-size="base(h4)"
            data-h2-font-weight="base(500)"
            data-h2-margin="base(0)"
            data-h2-vertical-align="base(middle)">${expansions[key].name}</h2>  
        </summary>
        <ul
          data-h2-border-left="base(1px solid black.2)"
          data-h2-display="base(grid)"
          data-h2-gap="base(x.5)"
          data-h2-grid-template-columns="base(1fr) p-tablet(1fr 1fr) laptop(1fr 1fr 1fr)"
          data-h2-list-style="base(none)"
          data-h2-margin="base(0, 0, 0, x.15)"
          data-h2-padding="base(0, 0, 0, x.65)">`;
      guide_data[key].forEach((guide) => {
        expac_guides = expac_guides + String.raw`${GuideBlock.render(data, guide)}`;
      });
      guide_markup = guide_markup + expac_guides + String.raw`</ul></details>`;
    }
  }
  let children = String.raw`
    <div>
      <label
        data-h2-display="base(block)"
        data-h2-margin="base(-x1, 0, x.5, 0)">
        <span 
          data-h2-display="base(block)"
          data-h2-font-size="base(caption)">Find a guide</span>
        <input 
          class="search"
          type="text"
          placeholder="CTRL + /"
          data-h2-background="base(foreground)"
          data-h2-border="base(1px solid black.3)"
          data-h2-color="base(black) base:selectors[::placeholder](black.7)"
          data-h2-display="base(block)"
          data-h2-font-variant-caps="base:selectors[::placeholder](small-caps)"
          data-h2-outline="base(none)"
          data-h2-padding="base(x.5)"
          data-h2-radius="base(5px)"
          data-h2-width="base(100%)"/>
      </label>
      <ul
        data-h2-background="base:children[button](primary.2) base:children[button:hover](primary.4) base:children[button.active](primary.8)"
        data-h2-border="base:children[button](1px solid primary.dark) base:children[button.active](1px solid black)"
        data-h2-color="base:children[button](primary.dark) base:children[button.active](black)"
        data-h2-cursor="base:children[button](pointer)"
        data-h2-display="base:children[>li](inline)"
        data-h2-font-size="base:children[button](caption)"
        data-h2-list-style="base(none)"
        data-h2-margin="base(0, 0, x2, 0)"
        data-h2-padding="base(0) base:children[button](x.15, x.5)"
        data-h2-radius="base:children[button](100px)"
        data-h2-transition="base:children[button](all .2s ease)">
        <li>
          <button class="active">All guides</button>
        </li>
        <li>
          <span
            data-h2-color="base(black.3)"
            data-h2-display="base(inline-block)"
            data-h2-margin="base(0, x.25)">•</span>
        </li>
        <li>
          <button>Dungeons</button>
        </li>
        <li>
          <button>Trials</button>
        </li>
        <li>
          <button>Raids</button>
        </li>
      </ul>
    </div>
    ${guide_markup}
    <details 
      open 
      class="results-wrapper hidden"
      data-h2-content="base:children[summary::marker]('+') base:selectors[[open]]:children[summary::marker]('−')"
      data-h2-display="base(block)"
      data-h2-margin="base(x2, 0, 0, 0)"
      data-h2-visually-hidden="base(visible) base:selectors[.hidden](invisible)">
      <summary
        data-h2-cursor="base(pointer)"
        data-h2-margin="base(0, 0, x.5, 0)">
        <h2 
          id="${key}"
          data-h2-display="base(inline-block)"
          data-h2-font-family="base('Cinzel', sans-serif)"
          data-h2-font-size="base(h4)"
          data-h2-font-weight="base(500)"
          data-h2-margin="base(0)"
          data-h2-vertical-align="base(middle)">Search results (<span class="counter"></span>)</h2>  
      </summary>
      <ul
        data-h2-border-left="base(1px solid black.2)"
        data-h2-display="base(grid)"
        data-h2-gap="base(x.25)"
        data-h2-grid-template-columns="base(1fr) p-tablet(1fr 1fr) laptop(1fr 1fr 1fr)"
        data-h2-list-style="base(none)"
        data-h2-margin="base(0, 0, 0, x.15)"
        data-h2-padding="base(0, 0, 0, x.65)">
      </ul>
      <div
        class="search-null-message"
        data-h2-visually-hidden="base(hidden) base:selectors[.active](visible)">
        <p>Sorry, no guides match your search terms.</p>
      </div>
    </details>
  `;
  return Base.render(
    data,
    'Home',
    '/static/assets/nav.jpg',
    'The FFXIV Pocket Guide',
    'Mobile-friendly guides for instanced content in Final Fantasy XIV.',
    'home',
    children
  );
}

module.exports = {
  data,
  render,
};
