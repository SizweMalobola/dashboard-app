import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


//https://geo.ipify.org/api/v1?apiKey=at_U8txXEatBuOzqb5Q8UxjRwNr3nheQ&ipAddress=8.8.8.8
const firebaseConfig = {
	apiKey: 'AIzaSyCjRJs-5dtxoYQajIpccduyZlTpONv-FWQ',
	authDomain: 'dashboard-app-afc07.firebaseapp.com',
	projectId: 'dashboard-app-afc07',
	storageBucket: 'dashboard-app-afc07.appspot.com',
	messagingSenderId: '282008719550',
	appId: '1:282008719550:web:776c586eabc2e31c238eef',
}

firebase.initializeApp(firebaseConfig)

export default firebase
