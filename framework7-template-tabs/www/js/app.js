// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyAmloi92FLNSVYqHqlraQVcPZhxJiwu8ik",
  authDomain: "health-guru-66548.firebaseapp.com",
  databaseURL: "https://health-guru-66548.firebaseio.com",
  projectId: "health-guru-66548",
  storageBucket: "health-guru-66548.appspot.com",
  messagingSenderId: "843678247299"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();



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
      happinessBoost: 0,
      tasks: [
        {
          name: 'Essay',
          category: 'Lit',
          date: '2018-04-20',
          urgent: true
        },
        {
          name: 'Essay(x2)',
          category: 'Lit',
          date: '2018-04-20',
          urgent: false
        },
        {
          name: 'Temp check',
          category: 'Bio',
          date: '2018-04-21',
          urgent: true
        },
        {
          name: 'Chapter 14 quiz',
          category: 'Math',
          date: '2018-04-12',
          urgent: true
        },
        {
          name: 'Volleyball test',
          category: 'P.E.',
          date: '2018-04-10',
          urgent: true
        },
      ],
      done: [],
      sleep: [
        {
          date: '2018-04-08',
          sleep: 7
        },
        {
          date: '2018-04-09',
          sleep: 6
        },
        {
          date: '2018-04-10',
          sleep: 7
        },
        {
          date: '2018-04-11',
          sleep: 6
        },
        {
          date: '2018-04-12',
          sleep: 7
        },
        {
          date: '2018-04-13',
          sleep: 6
        },
        {
          date: '2018-04-14',
          sleep: 7
        }
      ],
      categories: [
        'Lit',
        'Bio',
        'P.E.',
        'Math'
      ],
      water: [
        {
          date: '2018-04-08',
          cups: 7.4
        },
        {
          date: '2018-04-09',
          cups: 4
        },
        {
          date: '2018-04-10',
          cups: 9.8
        },
        {
          date: '2018-04-11',
          cups: 2.3
        },
        {
          date: '2018-04-12',
          cups: 8
        },
        {
          date: '2018-04-13',
          cups: 7.9
        },
        {
          date: '2018-04-14',
          cups: 7.1
        }
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
const homeView = app.views.create('#view-home', {
  url: '/home/',
  on: {
    pageInit: function (e) {
      if (e.name == 'meditation') {
        var penColor = 'white';

        window.setPixelColor = function (pixel) {
          pixel.style.backgroundColor = penColor;
        }

        window.setPenColor = function (color) {
          penColor = color;
        }

        window.reloadPage = function () {
          window.location.reload();
        }

        window.getRandomImg = function () {
          var a = Math.floor(Math.random() * 3);

          if (a == 0) { return ("java.png"); }
          else if (a == 1) { return ("bee.png"); }
          else { return ("fire.png"); }
        }

        function generateTag() {
          var img = document.createElement('img');
          img.setAttribute('src', getRandomImg());
          document.getElementById('img-container').appendChild(img);
        }

        generateTag();
      }

      $$('#logout').once('click', () => {
        firebase.auth().signOut().then(function () {
          clearInterval(window.refreshInterval);
          app.dialog.alert('Successfully logged out');
          app.loginScreen.open('#base-login-screen');
        }).catch(function (error) {
          app.dialog.alert('Unable to log out');
        });
      });
    }
  }
});
const taskView = app.views.create('#view-task', {
  url: '/task/'
});
const waterView = app.views.create('#view-water', {
  url: '/water/',
  on: {
    pageInit: function () {
      // initial draw @ 50% here
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = '#4286f4';
      ctx.strokeRect(100, 20, 100, 100);
      ctx.fillRect(100, 70, 100, 50);

      var ctx = document.getElementById("water-canvas").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: app.data.water.map(a => a.date),
          datasets: [{
            label: 'Cups drank',
            data: app.data.water.map(a => a.cups),
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }
});
const healthView = app.views.create('#view-health', {
  url: '/health/',
  iosSwipeBack: false,
  on: {
    pageInit: function() {
      var ctx = document.getElementById("sleep-canvas").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: app.data.sleep.map(a => a.date),
          datasets: [{
            label: 'Hours slept',
            data: app.data.sleep.map(a => a.sleep),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }
});
const settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  const username = $$('#my-login-screen [name="username"]').val();
  const password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});




$$('#view-home').on('tab:show', () => {
  homeView.router.navigate('/home/', { reloadCurrent: true });
});

$$('#view-meditation').on('tab:show', () => {
  console.log('test');

  $$('.meditation-badge').forEach(item => {
    if ($$(item).prop('style').display == "") {
      $$(item).hide();
    }
  })
})


app.loginScreen.open('#base-login-screen');

$$('#sign-in').click(() => {
  let username = $$('#sign-in-username').val().trim();
  let password = $$('#sign-in-password').val();
  firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorCode, errorMessage);
    app.dialog.alert(errorMessage);
  });
});

$$('#sign-up-screen').click(() => {
  app.loginScreen.open('#signup-screen');
});

$$('#sign-up-cancel').click(() => {
  app.loginScreen.close('#signup-screen');
})

$$('#sign-up').click(() => {
  let username = $$('#sign-up-username').val();
  let password = $$('#sign-up-password').val();
  firebase.auth().createUserWithEmailAndPassword(username, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorCode, errorMessage);
    app.dialog.alert(errorMessage);
  });
});


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // clear inputs
    $$('#sign-in-username').val('');
    $$('#sign-in-password').val('');
    $$('#sign-up-username').val('');
    $$('#sign-up-password').val('');

    app.loginScreen.close('#base-login-screen');
    app.loginScreen.close('#signup-screen');

    $$('#username-title').html(user.email);

    // get user data
    firebase.database().ref(user.uid).on('value', snapshot => {
      app.data = Object.assign({
        happiness: 100,
        happinessBoost: 0,
        tasks: [],
        done: [],
        sleep: [],
        categories: [],
        water: [],
      }, snapshot.val());

      // new day/no previous data
      if (app.data.water.length == 0 || app.data.water[app.data.water.length - 1].date != new Date().toISOString().slice(0, 10)) {
        app.data.water.push({
          date: new Date().toISOString().slice(0, 10),
          cups: 0
        });
      }

      // sleep gotton for today
      if (app.data.sleep.length > 0 && app.data.sleep[app.data.sleep.length - 1].date == new Date().toISOString().slice(0, 10)) {
        $$('.sleep-badge').hide();
      }

      //reload screens
      homeView.router.navigate('/home/', { reloadCurrent: true });
      taskView.router.navigate('/task/', { reloadCurrent: true });
      healthView.router.navigate('/health/', { reloadCurrent: true });
      settingsView.router.navigate('/settings/', { reloadCurrent: true });
      waterView.router.navigate('/water/', { reloadCurrent: true });
    });


    function firebaseSync() {
      console.log('pushing to firebase...');
      firebase.database().ref(user.uid).set(app.data);
    }

    // window.refreshInterval = setInterval(firebaseSync, 30 * 1000);
    window.onbeforeunload = firebaseSync;
  } else {
    // No user is signed in.
  }
});



var tourSteps = [
  {
    step: 0,
    header: '1st Tour Step',
    message: 'This is our first tour step.<br />Please click "next" or "back" to move forward and backwards respectively',
    element: "body > div.views > div > div.toolbar > div > a:nth-child(1)",
    action: function () {
      console.log('Started guided tour');
      console.log('Step 0');
    }
  },
  {
    step: 1,
    header: '2nd Tour Step',
    message: 'This is our seconds tour step.<br />You can use icons and images too! Wow!<br /><br /> F7 Icon:<br /> <i class="icon icon-back"></i><br /><br />Image:<br /> <div style="background-image: url(http://cdn.framework7.io/i/logo-new.png); width: 100px; height: 100px; background-size: cover; margin: 0 auto";></div><br />Please click "next" or "back" to move forward and backwards respectively',
    element: "body > div.views > div > div.navbar > div > div.right > a",
    action: function () {
      console.log('Step 1');
    }
  },
  {
    step: 2,
    header: '3rd and Final Step',
    message: 'Congratulations! You have finished your Tour Guide tutorial. Enjoy it :D',
    element: "body > div.views > div > div.navbar > div > div.right > a",
    action: function () {
      console.log('Step 2');
      console.log('Last step on guided tour');
    }
  }];