import React, { useState, useEffect } from 'react'

function Greet() {
	const [today, setToday] = useState(new Date())
	// console.log(today)

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
			i = `0${i}`
		}
		return i
	}

	//DAY
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
			<div className='pr-1 x align-self-start'>
				<img
					src={process.env.PUBLIC_URL + 'assets/side.svg'}
					alt='decorative sidelining'
					className='w-3 pt-3'
				/>
			</div>
			<div className='flex flex-col h-full'>
				<h2 className='py-3 text-xl text-white sm:py-6 sm:text-3xl md:text-4xl xl:text-5xl font-poppins md:font-medium md:py-4'>
					Hey Chris
				</h2>
				<h4 className='pt-3 text-base md:pt-1 sm:text-3xl md:text-4xl xl:text-3xl font-poppins text-teal-light'>
					<span className='block pb-1 text-xs tracking-wider sm:text-sm md:text-lg text-yellow-dark font-ropa-sans xl:text-lg'>
						Today is
					</span>
					{now}
				</h4>
			</div>
		</>
	)
}

export default Greet
