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
