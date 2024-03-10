// FFXIV PG ========================================================================================
'use strict';

// Script ==========================================================================================

var data = {};

function render(data, location) {
  return String.raw`
    <nav 
      id="nav"
      data-h2-background="base:all(linear-gradient(to right, black.9, black.9), url('/static/assets/nav.jpg'))"
      data-h2-background-position="base(center, center)"
      data-h2-background-size="base(cover, cover)"
      data-h2-border-right="l-tablet(1px solid black.2)"
      data-h2-color="base:all(white)"
      data-h2-height="base(100vh)"
      data-h2-location="base(0px, auto, auto, auto)"
      data-h2-position="base(sticky)">
      <a
        href="/"
        title="Return to the homepage.">
        <img 
          src="/static/assets/icon.svg" 
          alt="The FFXIV meteor icon."
          data-h2-display="base(block)"
          data-h2-margin="base(x3, auto, 0, auto)"
          data-h2-max-width="base(x5)"
          data-h2-width="base(100%)" />
      </a>
      <ul
        data-h2-color="base:children[a:hover](primary)"
        data-h2-list-style="base(none)"
        data-h2-margin="base:children[>li](x1, 0)"
        data-h2-padding="base(x2, x2, x1, x2)"
        data-h2-text-align="base(center)"
        data-h2-transition="base:children[a](all .2s ease)">
        <li>
          <a 
            href="/"
            title="Go to the homepage.">Guides</a>
        </li>
        <li>
          <a 
            href="/about/"
            title="Learn more about the people behind The Pocket Guide.">About us</a>
        </li>
        <li>
          <a 
            href="/contribute/"
            title="Learn how to contribute content to The Pocket Guide.">Contribute</a>
        </li>
        <li>
          <a 
            href="${data.site.github}"
            target="_blank"
            title="Visit the guide's open source code on Github.">Github</a>
        </li>
      </ul>
    </nav>
  `;
}

module.exports = {
  data,
  render,
};
