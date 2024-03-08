// FFXIV PG ========================================================================================
'use strict';

// Local data imports
const expansions = require('./_data/expansions');

// Local component imports
const GuideBlock = require('./_includes/guide-block.11ty');

// Script ==========================================================================================

var data = {};

function render(data) {
  const guide_data = require('./_data/guides');
  let guide_markup = String.raw``;
  for (var key in expansions) {
    if (guide_data[key].length > 0) {
      let expac_guides = String.raw`
      <h2 
        id="${key}"
        data-h2-font-size="base(h5)"
        data-h2-margin="base(x2, 0, x.5, 0)">${expansions[key].name}</h2>
      <ul
        data-h2-display="base(grid)"
        data-h2-gap="base(x.25)"
        data-h2-grid-template-columns="base(1fr) p-tablet(1fr 1fr) laptop(1fr 1fr 1fr)"
        data-h2-list-style="base(none)"
        data-h2-padding="base(0)">`;
      guide_data[key].forEach((guide) => {
        expac_guides = expac_guides + String.raw`<li>${GuideBlock.render(data, guide)}</li>`;
      });
      guide_markup = guide_markup + expac_guides + String.raw`</li></ul>`;
    }
  }
  return String.raw`
    <!DOCTYPE html>
    <html data-h2>
      <head>
        <title>The FFXIV Pocket Guide - Discover mobile friendly written guides to your favourite dungeons, trials, and raids.</title>
        <link 
          rel="stylesheet" 
          href="static/css/hydrogen.css" />
      </head>
      <body 
        data-h2-background="base(background)"
        data-h2-font-family="base(sans)">
        <a 
          href="#nav"
          data-h2-visually-hidden="base(invisible) base:focus-visible(visible)">Skip to navigation</a>
        <a 
          href="#content"
          data-h2-visually-hidden="base(invisible) base:focus-visible(visible)">Skip to content</a>
        <div
          data-h2-display="base(grid)"
          data-h2-grid-template-columns="base(1fr) l-tablet(1fr 5fr)">
          <nav 
            id="nav"
            data-h2-background="base(linear-gradient(to right, black.9, black.9), url('/static/assets/nav.jpg'))"
            data-h2-background-position="base(center)"
            data-h2-background-size="base(cover)"
            data-h2-color="base(white)"
            data-h2-height="base(100vh)">
            <img 
              src="/static/assets/icon.svg" 
              alt="The FFXIV meteor icon."
              data-h2-display="base(block)"
              data-h2-margin="base(x3, auto, 0, auto)"
              data-h2-max-width="base(x5)"
              data-h2-width="base(100%)" />
            <ul
              data-h2-list-style="base(none)"
              data-h2-margin="base:children[>li](x1, 0)"
              data-h2-padding="base(x2, x2, x1, x2)"
              data-h2-text-align="base(center)">
              <li>
                <a 
                  href=""
                  title="">Home</a>
              </li>
              <li
                data-h2-border-top="base(solid 1px white.2)"
                data-h2-padding="base(x1, 0, 0, 0)">
                <a 
                  href=""
                  title="">Dungeons</a>
              </li>
              <li>
                <a 
                  href=""
                  title="">Trials</a>
              </li>
              <li>
                <a 
                  href=""
                  title="">Raids</a>
              </li>
              <li 
                data-h2-border-top="base(solid 1px white.2)"
                data-h2-padding="base(x1, 0, 0, 0)">
                <a 
                  href=""
                  title="">About us</a>
              </li>
              <li>
                <a 
                  href=""
                  title="">Contribute</a>
              </li>
              <li>
                <a 
                  href=""
                  title="">Github</a>
              </li>
            </ul>
          </nav>
          <div>
            <div data-h2-container="base(center, large, x3)">
              <div
                data-h2-background="base(black)"
                data-h2-color="base(white)"
                data-h2-padding="base(x3, x1)"
                data-h2-radius="base(0, 0, 10px, 10px)"
                data-h2-text-align="base(center)">
                <h1 
                  data-h2-font-weight="base(700)">The FFXIV Pocket Guide</h1>
              </div>
              <label
                data-h2-display="base(block)"
                data-h2-margin="base(x2, 0)">
                <span 
                  data-h2-display="base(block)">Search for a guide...<span>
                <input 
                  type="text"
                  data-h2-display="base(block)"
                  data-h2-width="base(100%)"/>
              </label>
              <main id="content">
                ${guide_markup}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

module.exports = {
  data,
  render,
};
