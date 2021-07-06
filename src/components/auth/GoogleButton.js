import React from 'react'
import firebase from '../../firebase'

const db = firebase.firestore().collection('users')
let provider = new firebase.auth.GoogleAuthProvider()
const ref = firebase.auth()

const googleSignIn = () => {
	ref.signInWithPopup(provider)
		.then(response => {
			console.log('Successful:', response)
			ref.onAuthStateChanged(user => {
				if (user) {
					db.doc(user.uid)
						.set({
							id: user.uid,
							name: response.user.displayName,
							email: response.user.email,
                     photoUrl: response.user.photoURL,
						})
						.catch(error => {
							console.log('An error occurred', error)
						})
				}
			})
		})
		.catch(error => {
			console.log('An error occurred:', error)
		})
}

function GoogleButton() {
	return (
		<div className='flex items-center self-end pt-4'>
			<p className='pr-1 text-blue-lighter'>Sign in with Google instead</p>

			<button className='focus:outline-none'>
				<img
					src={process.env.PUBLIC_URL + 'assets/Google.svg'}
					alt='sign in with google instead'
					className='transition transform hover:scale-110 active:scale-100 focus:outline-none'
					onClick={() => googleSignIn()}
				/>
			</button>
		</div>
	)
}

export default GoogleButton
