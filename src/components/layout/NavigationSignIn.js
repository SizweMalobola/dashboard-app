import React from 'react'

function NavigationSignIn() {
	return (
		<>
			<nav className='flex justify-between px-4 py-4 md:px-8'>
				<div>
					<img
						src={process.env.PUBLIC_URL + '/assets/icon.svg'}
						alt='application logo'
					/>
				</div>
            <div>
					<img
						src={process.env.PUBLIC_URL + '/assets/profile.svg'}
                  alt='application logo'
                  className='cursor-pointer'
					/>
				</div>
			</nav>
		</>
	)
}

export default NavigationSignIn