import React, { useState, useEffect } from 'react'

function Time() {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)

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

	const hour = checkFormat(time.getHours())
	const minute = checkFormat(time.getMinutes())
	const now = `${hour}:${minute}`

	return (
		<div>
			<h2 className='text-3xl md:text-5xl xl:text-6xl text-teal-light font-semi-bold font-poppins'>
				{now}
			</h2>
		</div>
	)
}

export default Time
