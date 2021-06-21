import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyAjV-ST1e8XMtzUWM87NwpwtTFIoY6adGo",
   authDomain: "my-dashboard-ad95e.firebaseapp.com",
   projectId: "my-dashboard-ad95e",
   storageBucket: "my-dashboard-ad95e.appspot.com",
   messagingSenderId: "867161555378",
   appId: "1:867161555378:web:2f707b495eb08c7f1664ab"
 }

firebase.initializeApp(firebaseConfig)
 
export default firebase