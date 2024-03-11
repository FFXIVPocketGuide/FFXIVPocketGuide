const body = document.querySelector('body');

// Get Hydrogen elements
let instances = document.querySelectorAll('[data-h2]');
let switcher = document.querySelector('#switcher');

// Toggle preference
function enable_mode_preference() {
  switcher.classList.add('pref');
  switcher.classList.remove('light', 'dark');
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    instances.forEach((hydrogen) => {
      hydrogen.dataset.h2 =
        hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' light';
    });
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    instances.forEach((hydrogen) => {
      hydrogen.dataset.h2 =
        hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' dark';
    });
  } else {
    instances.forEach((hydrogen) => {
      hydrogen.dataset.h2 = hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '');
    });
  }
  localStorage.removeItem('mode');
}

// Toggle light
function enable_mode_light() {
  switcher.classList.add('light');
  switcher.classList.remove('dark', 'pref');
  instances.forEach((hydrogen) => {
    hydrogen.dataset.h2 = hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' light';
  });
  localStorage.mode = 'light';
}

// Toggle dark
function enable_mode_dark() {
  switcher.classList.add('dark');
  switcher.classList.remove('light', 'pref');
  instances.forEach((hydrogen) => {
    hydrogen.dataset.h2 = hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' dark';
  });
  localStorage.mode = 'dark';
}

// Listeners
function watch_for_mode_changes() {
  if (
    (localStorage.mode && localStorage.mode === 'light') ||
    (!localStorage.mode && window.matchMedia('(prefers-color-scheme: light)').matches)
  ) {
    instances.forEach((hydrogen) => {
      hydrogen.dataset.h2 =
        hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' light';
    });
  } else if (
    (localStorage.mode && localStorage.mode === 'dark') ||
    (!localStorage.mode && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    instances.forEach((hydrogen) => {
      hydrogen.dataset.h2 =
        hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '') + ' dark';
    });
  } else {
    instances.forEach((hydrogen) => {
      hydrogen.dataset.h2 = hydrogen.dataset.h2.replace(/dark/g, '').replace(/light/g, '');
    });
  }
}
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => e.matches && watch_for_mode_changes());
window
  .matchMedia('(prefers-color-scheme: light)')
  .addEventListener('change', (e) => e.matches && watch_for_mode_changes());

// Switcher class storage check
if (!localStorage.mode) {
  switcher.setAttribute('class', 'pref');
} else {
  if (localStorage.mode === 'light') {
    switcher.setAttribute('class', 'light');
  } else if (localStorage.mode === 'dark') {
    switcher.setAttribute('class', 'dark');
  }
}

// Search

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let search = document.querySelector('.search');
    let expansions = document.querySelectorAll('.guide-wrapper');
    document.addEventListener('keyup', (event) => {
      if (event.ctrlKey && event.key == '/') {
        search.focus();
      }
    });
    search.addEventListener('keyup', (event) => {
      let badResults = document.querySelector('.results-wrapper').querySelectorAll('li');
      badResults.forEach((badResult) => {
        badResult.remove();
      });
      let input = event.target.value.toLowerCase();
      let input_array = input.split(/ |,|-|_/g);
      let matchItems = [];
      if (input.length > 0) {
        let total_matches = 0;
        document.querySelector('.results-wrapper').classList.remove('hidden');
        expansions.forEach((expac) => {
          let results = expac.querySelectorAll('.guide');
          results.forEach((result) => {
            if (result.dataset.terms != 'undefined' && result.dataset.terms != undefined) {
              let terms = result.dataset.terms.split(',');
              let matches = [];
              terms.forEach((term) => {
                input_array.forEach((value) => {
                  if (value != '') {
                    if (term.match(new RegExp(value))) {
                      matches.push(term);
                    }
                  }
                });
              });
              if (matches.length > 0) {
                result.dataset.matchCount = matches.length;
                total_matches += 1;
                matchItems = matchItems.concat(result.cloneNode(true));
              }
            }
          });
          expac.classList.add('hidden');
        });
        if (total_matches == 0) {
          document.querySelector('.search-null-message').classList.add('active');
        } else {
          document.querySelector('.search-null-message').classList.remove('active');
          matchItems.sort(function (a, b) {
            return +b.dataset.matchCount - +a.dataset.matchCount;
          });
          matchItems.forEach((item, index, array) => {
            document.querySelector('.results-wrapper').querySelector('ul').appendChild(item);
          });
        }
        document.querySelector('.results-wrapper .counter').textContent = total_matches;
      } else {
        document.querySelector('.results-wrapper').classList.add('hidden');
        expansions.forEach((expac) => {
          expac.classList.remove('hidden');
        });
      }
    });
  }
};
