// FFXIV PG ========================================================================================
'use strict';

// Local component imports
const ThemeSwitcher = require('../_includes/theme-switcher.11ty');
const Navigation = require('../_includes/navigation.11ty');

// Script ==========================================================================================

var data = {};

function render(data, title, heroTitle, heroSubtitle, location, children) {
  return String.raw`
    <!DOCTYPE html>
    <html data-h2>
      <head>
        <title>${title} - The FFXIV Pocket Guide - Discover mobile friendly written guides to your favourite dungeons, trials, and raids.</title>
        <script>
          let hydrogen = document.querySelector('html');
          if (localStorage.mode) {
            if (localStorage.mode === 'light') {
              hydrogen.dataset.h2 = hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' light';
            } else if (localStorage.mode === 'dark') {
              hydrogen.dataset.h2 = hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' dark';
            } 
          } else if (
            window.matchMedia('(prefers-color-scheme: dark)').matches
          ) {
            hydrogen.dataset.h2 = hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' dark';
          } else {
            hydrogen.dataset.h2 = hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '');
          }
        </script>
        <link 
          rel="stylesheet" 
          href="/static/css/app.css" />
        <link 
          rel="stylesheet" 
          href="/static/css/hydrogen.css" />
      </head>
      <body 
        data-h2-background="base(background)"
        data-h2-color="base(black)"
        data-h2-font-family="base(sans)">
        <a 
          href="#nav"
          data-h2-visually-hidden="base(invisible) base:focus-visible(visible)">Skip to navigation</a>
        <a 
          href="#content"
          data-h2-visually-hidden="base(invisible) base:focus-visible(visible)">Skip to content</a>
        <div
          data-h2-display="base(grid)"
          data-h2-grid-template-columns="base(1fr) l-tablet(1fr 4fr)">
          ${Navigation.render(data, location)}
          <div
            data-h2-display="base(flex)"
            data-h2-flex-direction="base(column)"
            data-h2-min-height="base(100vh)">
            <div
              data-h2-background="base(foreground)"
              data-h2-border-bottom="base(1px solid black.2)"
              data-h2-color="base(black)"
              data-h2-padding="base(x3, 0)"
              data-h2-position="base(relative)">
              <div data-h2-container="base(center, large, x3)">
                <h1 
                  data-h2-font-weight="base(700)"
                  data-h2-margin="base(0, 0, x1, 0)">${heroTitle}</h1>
                <p>${heroSubtitle}</p>
              </div>
              ${ThemeSwitcher.render()}
            </div>
            <div 
              data-h2-container="base(center, large, x3)"
              data-h2-flex-grow="base(1)">
              <main 
                id="content"
                data-h2-padding="base(x3, 0)">
                ${children}
              </main>
            </div>
            <footer
              data-h2-background="base(foreground)"
              data-h2-border-top="base(1px solid black.2)"
              data-h2-padding="base(x2)"
              data-h2-text-align="base(center)">
              <p>Built with <span data-h2-color="base(primary.dark)">♥</span> by <a href="${
                data.site.github
              }" title="Visit the guide's open source code on Github." target="_blank" data-h2-color="base(black) base:hover(primary.dark)" data-h2-transition="base(all .2s ease)">players just like you!</a></p>
            </footer>
          </div>
        </div>
      </body>
      <script src="/static/scripts/app.js"></script>
    </html>
  `;
}

module.exports = {
  data,
  render,
};
