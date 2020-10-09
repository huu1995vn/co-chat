import firebase from "firebase/app"
import "firebase/storage"
import "firebase/auth"
import axios from "axios"
const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const storage = firebase.storage()
const auth = firebase.auth()
// auth.useDeviceLanguage();
auth.languageCode = 'vi';
auth.settings.appVerificationDisabledForTesting = process.env.ENV === "dev";

export const createRecaptchaVerifier = (idRecaptcha, onCallback) => {
  if(auth.settings.appVerificationDisabledForTesting)
  {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(idRecaptcha);
    return;
  }
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(idRecaptcha, {
    size: "normal",//"normal",//
    callback: onCallback
  });
  window.recaptchaVerifier.render().then(widgetId => {
    window.recaptchaWidgetId = widgetId;
  });
}
export const sendOTPSMS = async (phoneNumber, applicationVerifier = window.recaptchaVerifier) => {
  try {
    window.confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, applicationVerifier);
  } catch (error) {
    throw error
  }

}
export const verifyOTPSMS = async (code) => {
  var userCredential = await window.confirmationResult.confirm(code);

}
export const uploadFileMarkdown = (content, name) => {
  if (name === null) throw new Error("Tên file không được bỏ trống")
  var file = new File([content], `${name}.md`, {
    type: "application/octet-stream",
  })
  let uploadTask = storage
    .ref()
    .child("files/" + file.name)
    .put(file)
  return uploadTask
}

export const getFileMarkdown = async name => {
  try {
    let res = await axios({
      url: `https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/dailyxe-ionic-raovat.appspot.com/o/files%2F${name}.md?alt=media&token=9b2ee6d3-9283-449f-8c4f-0795c9e7266f`,
      method: "GET",
    })
    return res.data
  } catch (error) {
    return ""
  }
}

export {
  storage
}