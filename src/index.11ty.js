var data = {};

function render(data) {
  return String.raw`
    <!DOCTYPE html>
    <html>
      <head>
        <title>A static website</title>
      
        <!-- include the widget -->
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body>
        <!-- Add a menu:
        Log in / Sign up - when the user is not logged in
        Username / Log out - when the user is logged in
        -->
        <div data-netlify-identity-menu></div>
      
        <!-- Add a simpler button:
          Simple button that will open the modal.
        -->
        <div data-netlify-identity-button>Login with Netlify Identity</div>
      </body>
    </html>
  `;
}

module.exports = {
  data,
  render,
};
