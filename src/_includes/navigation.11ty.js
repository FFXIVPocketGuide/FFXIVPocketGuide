// FFXIV PG ========================================================================================
'use strict';

// Script ==========================================================================================

var data = {};

function render(data, location) {
  let active = String.raw`
    data-h2-color="base(primary)"
    data-h2-font-weight="base(700)"
    data-h2-text-decoration="base(none)"
  `;
  let home = ``;
  if (location === 'home') {
    home = active;
  }
  let guides = ``;
  if (location === 'guides') {
    guides = active;
  }
  let about = ``;
  if (location === 'about') {
    about = active;
  }
  let contribute = ``;
  if (location === 'contribute') {
    contribute = active;
  }
  return String.raw`
    <nav 
      id="nav"
      data-h2-flex-grow="base(1)">
      <a
        href="/"
        title="Return to the homepage."
        data-h2-display="base(inline-block)"
        data-h2-margin="base(0, 0, 0, -x.5)"
        data-h2-padding="base(0, x.5)"
        data-h2-vertical-align="base(middle)">
        <img 
          src="/static/assets/icon.svg" 
          alt="The FFXIV meteor icon."
          data-h2-display="base(block)"
          data-h2-margin="base(0)"
          data-h2-width="base(x2)" />
      </a>
      <ul
        data-h2-color="base:all(white) base:children[a:hover](primary)"
        data-h2-display="base(inline-block) base:children[>li](inline-block)"
        data-h2-list-style="base(none)"
        data-h2-padding="base(0) base:children[>li](0, x.5)"
        data-h2-transition="base:children[a](all .2s ease)">
        <li>
          <a 
            href="/"
            title="Go to the homepage."
            ${home}
            ${guides}>Guides</a>
        </li>
        <li>
          <a 
            href="/about/"
            title="Learn more about the people behind The Pocket Guide."
            ${about}>About us</a>
        </li>
        <li>
          <a 
            href="/contribute/"
            title="Learn how to contribute content to The Pocket Guide."
            ${contribute}>Contribute</a>
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
