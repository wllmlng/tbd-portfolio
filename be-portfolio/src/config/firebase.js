const admin = require('firebase-admin');

// Load your service account key file
const serviceAccount = "BLNdJdrcRWsygDohSSMbGvfIzgYORCRLXUnZIOIeTReR_BsKuYvZj09XPqeSgNHzcE9Dy1wr1YOSWekP8_qT5qY"

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "will-tbd-portfolio.firebaseapp.com"
});

const db = admin.firestore();
