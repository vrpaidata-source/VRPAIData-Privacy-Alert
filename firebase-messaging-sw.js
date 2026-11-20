
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAA2NBV_0-EYjEIgOHsPNJB6YVTRez28mQ",
  authDomain: "vrpaidata-privacy-alert.firebaseapp.com",
  projectId: "vrpaidata-privacy-alert",
  storageBucket: "vrpaidata-privacy-alert.firebasestorage.app",
  messagingSenderId: "698731526202",
  appId: "1:698731526202:web:e65141751810a4854f5d03",
  measurementId: "G-S0WWQC0S3X"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification?.title || "VRPAIData Privacy Alert",
    {
      body: payload.notification?.body || "QR Link திறக்கப்பட்டுள்ளது.",
      icon: "./",
      vibrate: [300, 150, 300]
    }
  );
});
