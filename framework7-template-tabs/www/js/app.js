// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      happiness: 25,
      tasks: [
          {
              name: 'test1'
          },
          {
              name: 'test2'
          },
          {
              name: 'test3'
          },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/home/'
});
var taskView = app.views.create('#view-task', {
  url: '/task/'
});
var meditationView = app.views.create('#view-meditation', {
  url: '/meditation/'
});
var healthView = app.views.create('#view-health', {
  url: '/health/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});



function reload(name) {
  app.router.navigate(`/${name}/`, {reloadCurrent: true})
}