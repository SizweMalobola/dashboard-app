import React from 'react'

function SignupButton() {
	return (
		<div className='w-full pt-4'>
			<button
				type='submit'
				className='w-full px-4 py-2 text-xl text-white transition border-none rounded-lg bg-yellow-dark font-ropa-sans hover:bg-yellow-500 active:bg-yellow-dark focus:outline-none focus:ring-2 focus:ring-yellow-600 active:outline-none'
			>
				Sign In
			</button>
		</div>
	)
}

export default SignupButton
