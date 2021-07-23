importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCzjSVMrgIz99mWxM6krweJ3KowF9rVO78",
    authDomain: "iot-demo-16f2c.firebaseapp.com",
    databaseURL: "https://iot-demo-16f2c-default-rtdb.firebaseio.com",
    projectId: "iot-demo-16f2c",
    storageBucket: "iot-demo-16f2c.appspot.com",
    messagingSenderId: "259884158772",
    appId: "1:259884158772:web:fb55aa71471268cfec5f61",
    measurementId: "G-GEDPH9CV5H"
    };

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
