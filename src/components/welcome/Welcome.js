import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../layout/Navigation'
import Blob from '../layout/Blob'

function Welcome() {
	return (
		<div className='relative z-50 h-screen min-h-screen py-3 overflow-hidden bg-blue-dark'>
         <Blob />
			<Navigation />

			<main className='flex items-center justify-start min-h-full px-4 md:px-8'>
				<div className='relative z-50 sm:mt-16'>
					<h1 className='text-5xl font-medium tracking-wider text-white md:text-8xl xl:text-9xl font-ropa-sans'>
						My Dash
					</h1>

					<h2 className='pt-3 text-xl tracking-wide md:pt-6 md:text-3xl text-teal-light font-poppins xl:text-4xl'>
						Simplify your browser <span className='block'>home-page</span>
					</h2>

					<div className='flex flex-col pt-4 md:pt-8 xl:flex-row xl:justify-between xl:items-center'>
						<Link to='/sign-up'>
							<button className='h-10 text-white transition bg-yellow-dark hover:bg-yellow-500 font-poppins md:h-14 w-36 md:w-48 rounded-xl md:text-xl'>
								Sign Up
							</button>
						</Link>

						<Link to='/login'>
							<button className='h-10 mt-4 transition border-4  text-yellow-dark border-yellow-dark md:mt-8 xl:mt-0 hover:border-yellow-500 hover:text-yellow-500 font-poppins md:h-14 w-36 md:w-48 rounded-xl md:text-xl'>
								Login
							</button>
						</Link>
					</div>
				</div>
				s
			</main>
		</div>
	)
}

export default Welcome
