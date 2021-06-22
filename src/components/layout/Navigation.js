import React from 'react'

function Navigation() {

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
					<img
						src={process.env.PUBLIC_URL + '/assets/profile.svg'}
						alt='application logo'
					/>
				</div>
			</nav>
		</>
	)
}

export default Navigation
