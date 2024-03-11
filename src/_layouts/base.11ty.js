// FFXIV PG ========================================================================================
'use strict';

// Script ==========================================================================================

var data = {};

function render(data, title, heroImage, heroTitle, heroSubtitle, location, children) {
  // Local data imports
  const guideData = require('../_data/guides');
  // Local component imports
  const ThemeSwitcher = require('../_includes/theme-switcher.11ty');
  const Navigation = require('../_includes/navigation.11ty');
  let difficulty = ``;
  if (location === 'guides') {
    let guide = data.pagination.items[0];
    let difficulty_color = String.raw`data-h2-color="base:all(white)"`;
    if (guide.difficulty === 'hard') {
      difficulty_color = String.raw`data-h2-color="base(#f4d471)"`;
    } else if (guide.difficulty === 'savage' || guide.difficulty === 'extreme') {
      difficulty_color = String.raw`data-h2-color="base(#ee8686)"`;
    } else if (guide.difficulty === 'ultimate' || guide.difficulty === 'unreal') {
      difficulty_color = String.raw`data-h2-color="base(#a286ee)"`;
    }
    difficulty = String.raw`
      <span
        ${difficulty_color}
        data-h2-font-size="base(caption)"
        data-h2-font-weight="base(600)"
        data-h2-text-shadow="base(-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000)"
        data-h2-font-variant-caps="base(small-caps)">
        ${guide.difficulty}
      </span>
    `;
  }
  return String.raw`
    <!DOCTYPE html>
    <html lang="en" data-h2 style="scroll-behavior: smooth;">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
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
            data-h2-background="base:all(black)" 
            data-h2-border-bottom="base:all(1px solid white.2)"
            data-h2-location="base(0, auto, auto, auto)"
            data-h2-position="base(sticky)"
            data-h2-z-index="base(5)">
            <div data-h2-container="base(center, large, x1) l-tablet(center, large, x3)">
              <div
                data-h2-display="base(flex)"
                data-h2-flex-direction="base(row)"
                data-h2-align-items="base(center)"
                data-h2-padding="base(x1, 0)">
                ${Navigation.render(data, location)}
                ${ThemeSwitcher.render()}
              </div>
            </div>
          </div>
        <div>
          <div
            data-h2-display="base(flex)"
            data-h2-flex-direction="base(column)"
            data-h2-min-height="base(100vh)">
            <div
              data-h2-background-position="base(0 25%)"
              data-h2-background-size="base(cover)"
              data-h2-border-bottom="base(1px solid black.2)"
              data-h2-color="base:all(white)"
              data-h2-padding="base(x4, 0)"
              data-h2-position="base(relative)"
              style="background-image: linear-gradient(to right, rgba(22, 22, 30, .8), rgba(22, 22, 30, .8)), url('${heroImage}');">
              <div data-h2-container="base(center, large, x1) l-tablet(center, large, x3)">
                <div
                  data-h2-display="base(flex)"
                  data-h2-align-items="base(center)"
                  data-h2-margin="base(0, 0, x1, 0)">
                  <h1 
                    data-h2-flex-grow="base(1)"
                    data-h2-font-weight="base(700)">${heroTitle}</h1>
                  ${difficulty}
                </div>
                <p>${heroSubtitle}</p>
              </div>
            </div>
            <div 
              data-h2-container="base(center, large, x1) l-tablet(center, large, x3)"
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
