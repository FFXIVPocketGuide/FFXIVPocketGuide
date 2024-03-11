// FFXIV PG ========================================================================================
'use strict';

// Script ==========================================================================================

var data = {};

function render(data, guide) {
  // Local component imports
  const Base = require('./base.11ty');
  // Generate boss markup
  let bosses = ``;
  if (guide.bosses) {
    guide.bosses.forEach((boss, index, array) => {
      let bossState = String.raw``;
      if (array.length === 1) {
        bossState = String.raw`open`;
      }
      bosses += String.raw`
            <details ${bossState}>
              <summary>
                <h3
                  data-h2-display="base(inline-block)">${boss.name}</h3>
              </summary>
          `;
      if (boss.phases) {
        boss.phases.forEach((phase, index, array) => {
          bosses += String.raw`
            <details open>
              <summary>
                <h4
                  data-h2-display="base(inline-block)">Phase ${index + 1}</h4>
              </summary>
          `;
          if (phase.notes) {
            bosses += String.raw`
              <h5>Notes</h5>
              <ul>
            `;
            phase.notes.forEach((note) => {
              bosses += String.raw`<li>${note}</li>`;
            });
            bosses += String.raw`</ul>`;
          }
          if (phase.sequence) {
            bosses += String.raw`
              <h5>Attack script</h5>
              <ul data-h2-margin="base:children[>li](x.5, 0, 0, 0)">
            `;
            phase.sequence.forEach((group) => {
              bosses += String.raw`<li>`;
              if (group.attacks) {
                group.attacks.forEach((attack) => {
                  let match = false;
                  if (boss.attacks) {
                    boss.attacks.forEach((definition) => {
                      if (definition.type === 'regular') {
                        if (attack === definition.name) {
                          let notes = String.raw``;
                          if (definition.notes) {
                            definition.notes.forEach((note) => {
                              notes += String.raw`<li>${note}</li>`;
                            });
                          }
                          let images = String.raw``;
                          if (definition.images) {
                            definition.images.forEach((image) => {
                              images += String.raw`<img src="${image.image}" alt="${image.alt}" />`;
                            });
                          }
                          bosses += String.raw`
                            <details>
                              <summary><p data-h2-display="base(inline-block)">${attack}</p><p>${definition.tags} | ${definition.roles}</p></summary>
                              <ul>
                                ${notes}
                              </ul>
                              ${images}
                            </details>
                          `;
                          match = true;
                        }
                      } else if (definition.type === 'variation') {
                        definition.variations.forEach((variant) => {
                          if (attack === variant.name) {
                            let notes = String.raw``;
                            if (variant.notes) {
                              variant.notes.forEach((note) => {
                                notes += String.raw`<li>${note}</li>`;
                              });
                            }
                            let images = String.raw``;
                            if (variant.images) {
                              variant.images.forEach((image) => {
                                images += String.raw`<img src="${image.image}" alt="${image.alt}" />`;
                              });
                            }
                            bosses += String.raw`
                              <details>
                                <summary><p data-h2-display="base(inline-block)">${attack}</p><p>${variant.tags} | ${variant.roles}</p></summary>
                                <ul>
                                  ${notes}
                                </ul>
                                ${images}
                              </details>
                            `;
                            match = true;
                          }
                        });
                      }
                    });
                  }
                  if (match == false) {
                    bosses += String.raw`${attack}`;
                  }
                });
              }
              bosses += String.raw`</li>`;
            });
            bosses += String.raw`</ul>`;
          }
          bosses += String.raw`</details>`;
        });
      }
      bosses += String.raw`</details>`;
    });
  }
  // Generate optional orchestrion output
  let orchestrion = String.raw``;
  if (guide.orchestrion) {
    orchestrion = String.raw`
      <p><span>Orchestrion:</span> ${guide.orchestrion}</p>
    `;
  }
  // Generate child output
  let children = String.raw`
    <div
      data-h2-display="base(grid)"
      data-h2-grid-template-columns="base(1fr) l-tablet(1fr 3fr)"
      data-h2-gap="base(x2)"
      data-h2-position="base(relative)">
      <div>
        <div
          data-h2-background="base(foreground)"
          data-h2-font-weight="base:children[>p >span:first-child](700)"
          data-h2-margin="base:children[p](0, 0, x.5, 0)"
          data-h2-padding="base(x1, x1, x.5, x1)"
          data-h2-position="base(sticky)"
          data-h2-location="base(x6, auto, auto, auto)"
          data-h2-radius="base(10px)"
          data-h2-shadow="base(larger)">
          <p><span>Difficulty:</span> <span data-h2-text-transform="base(capitalize)">${
            guide.difficulty
          }</span></p>
          <p><span>Player level:</span> ${guide.plvl.replace(/^0+/, '')}</p>
          <p><span>Item level:</span> ${guide.ilvl}</p>
          <p><span>Patch:</span> ${guide.patch.number} - ${guide.patch.name}</p>
          ${orchestrion}
        </div>
      </div>
      <div>
        <h2>Bosses</h2>
        ${bosses}
      </div>
    </div>
  `;
  return Base.render(
    data,
    guide.title,
    guide.img,
    guide.title,
    guide.description,
    'guides',
    children
  );
}

module.exports = {
  data,
  render,
};
