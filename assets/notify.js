const notifier = require('node-notifier');
// String
// notifier.notify('Message');

// Object
notifier.notify({
  'title': "It's 5 o'clock somewhere!",
  'message': 'Clone finished compiling your CSS. 🐈'
});
