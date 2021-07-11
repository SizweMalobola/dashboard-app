import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

function Greet() {
	const [today, setToday] = useState(new Date())
	const [name, setName] = useState('User')

	useEffect(() => {
		const db = firebase.firestore().collection('users')

		db.get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				let data = doc.data()
				setName(data.name)
			})
		})
	})

	useEffect(() => {
		let timer = setInterval(() => {
			setToday(new Date())
		}, 50000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	function checkFormat(i) {
		if (i < 10) {
			i = i.toString().padStart(2, '0')
		}
		return i
	}

	let dayFormat = { weekday: 'short' }
	let day = today.toLocaleDateString('en-US', dayFormat)

	let monthFormat = { month: 'short' }
	let month = today.toLocaleDateString('en-US', monthFormat)

	let date = today.getDate()
	const year = today.getFullYear()

	checkFormat(day)
	checkFormat(date)

	const now = `${day}, ${date} ${month}, ${year}`

	return (
		<>
			<div className='hidden pr-1 x align-self-start sm:flex'>
				<img
					src={process.env.PUBLIC_URL + 'assets/side.svg'}
					alt='decorative sidelining'
					className='w-3 pt-3'
				/>
			</div>
			<div className='flex flex-col h-full'>
				<h2 className='text-lg text-white xxxs:py-3 sm:text-2xl md:text-4xl xl:text-3xl font-poppins md:font-medium md:py-4'>
					Hey {name}
				</h2>
				<h4 className='pt-3 text-lg md:pt-1 sm:text-3xl md:text-4xl xl:text-3xl font-poppins text-teal-light'>
					<span className='hidden pb-1 text-xs tracking-wider xxxs:block sm:text-sm md:text-lg text-yellow-dark font-ropa-sans xl:text-lg'>
						Today is
					</span>
					{now}
				</h4>
			</div>
		</>
	)
}

export default Greet
