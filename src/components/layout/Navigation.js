import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

function Navigation() {
	const [profile, setProfile] = useState(
		process.env.PUBLIC_URL + '/assets/profile.svg',
	)

	useEffect(() => {
		let db = firebase.firestore().collection('users')

		db.get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				let data = doc.data()
				setProfile(data.photoUrl)
			})
		})
	}, [])

	return (
		<>
			<nav className='relative z-50 flex justify-between px-4 py-2 md:px-8'>
				<div>
					<img
						src={process.env.PUBLIC_URL + '/assets/icon.svg'}
						alt='application logo'
					/>
				</div>
				<div className='relative'>
               <div className='flex items-center justify-center w-8 h-8 bg-transparent'>
               <img src={profile} alt='user profile' className='w-full h-full rounded-full'/>
               </div>
				</div>
			</nav>
		</>
	)
}

export default Navigation
