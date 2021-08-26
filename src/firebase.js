import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyDd8K6mcbHG3WSiom3gbfiOtB2fmzXPh4g",
  authDomain: "zollo-dev.firebaseapp.com",
  projectId: "zollo-dev",
  storageBucket: "zollo-dev.appspot.com",
  messagingSenderId: "692048465552",
  appId: "1:692048465552:web:99ec1b1330afbcb7915215"
    }
)

export const auth = app.auth()
export default app