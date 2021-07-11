import React from 'react'
import Navigation from '../layout/Navigation'
import Blob from '../layout/Blob'
import FormSignUp from '../layout/FormSignUp'

function SignUp() {
	
	return (
		<div className='relative h-screen min-h-screen px-4 overflow-hidden bg-blue-dark'>
			<Blob />
			<Navigation />

			<div className='relative z-50 px-4 pt-4 md:px-6 '>
				<h1 className='text-6xl tracking-wider text-white md:text-8xl font-ropa-sans'>
					Sign Up
				</h1>

				<h3 className='pt-2 pb-4 text-md text-teal-light font-poppins md:text-xl'>
					Hey there, glad to have you here
				</h3>
			</div>

			<FormSignUp />
		</div>
	)
}

export default SignUp
