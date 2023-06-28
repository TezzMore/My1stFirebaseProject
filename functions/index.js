const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("/path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

exports.calculateAge = functions.firestore
    .document("ageCalculator/{documentId}")
    .onWrite(async (change, context) => {
      const {data} = change.after;
      const {documentId} = context.params;

      const birthdate = new Date(data["year"], data["month"] - 1, data["date"]);
      const currentDate = new Date();

      const ageInMillis = currentDate - birthdate;
      const ageInSeconds = Math.floor(ageInMillis / 1000);
      const ageInMinutes = Math.floor(ageInSeconds / 60);
      const ageInHours = Math.floor(ageInMinutes / 60);
      const ageInDays = Math.floor(ageInHours / 24);

      const resultsRef = firestore
          .collection("ageCalculator")
          .doc(documentId)
          .collection("results");

      await resultsRef.doc("result").set({
        days: ageInDays,
        hours: ageInHours,
        minutes: ageInMinutes,
        seconds: ageInSeconds,
      });

      return null;
    });
