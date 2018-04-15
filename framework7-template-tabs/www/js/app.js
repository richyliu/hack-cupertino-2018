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
          name: 'Essay',
          category: 'Lit',
          date: '2018-4-20',
          urgent: []
        },
        {
          name: 'Temp check',
          category: 'Bio',
          date: '2018-4-21',
          urgent: [""]
        },
        {
          name: 'Chapter 14 quiz',
          category: 'Math',
          date: '2018-4-12',
          urgent: [""]
        },
        {
          name: 'Volleyball test',
          category: 'P.E.',
          date: '2018-4-10',
          urgent: [""]
        },
      ],
      done: [],
      sleep: [
        {
          date: new Date('2018-4-8'),
          sleep: 7
        },
        {
          date: new Date('2018-4-9'),
          sleep: 6
        },
        {
          date: new Date('2018-4-10'),
          sleep: 7
        },
        {
          date: new Date('2018-4-11'),
          sleep: 6
        },
        {
          date: new Date('2018-4-12'),
          sleep: 7
        },
        {
          date: new Date('2018-4-13'),
          sleep: 6
        },
        {
          date: new Date('2018-4-14'),
          sleep: 7
        }
      ],
      categories: [
        'Lit',
        'Bio',
        'P.E.',
        'Math'
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
  app.router.navigate(`/${name}/`, { reloadCurrent: true })
}


$$('#view-home').on('tab:show', () => {
  homeView.router.navigate('/home/', { reloadCurrent: true });
});