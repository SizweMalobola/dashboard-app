import React from 'react'
import Navigation from '../layout/Navigation'
import Time from './Time'
import Weather from './Weather'
import Greet from './Greet'
import Notes from './Notes'
import Bookmarks from './Bookmarks'

function Main() {
	return (
		<div className='h-screen max-w-full min-h-screen py-2 bg-blue-dark'>
			<Navigation />

			<main class='px-4 xl:px-6 xl:py-4 py-2 grid grid-cols-7 grid-rows-6 xl:gap-5 gap-2 h-[90vh]'>
				<section className='flex items-center justify-center col-span-3 row-span-1 shadow-xl rounded-3xl xl:order-1 bg-blue-light xl:col-span-2 xl:row-span-2 xl:p-6'>
					<Time />
				</section>

				<section className='col-span-4 row-span-3 shadow-xl xl:flex-col xl:items-center xl:flex rounded-3xl xl:order-3 xl:row-span-6 xl:col-span-2 bg-blue-light'>
					<Weather />
				</section>

				<section className='flex items-start col-span-3 row-span-2 px-2 py-4 shadow-xl rounded-3xl xl:order-2 bg-blue-light xl:col-span-3 xl:row-span-2'>
					<Greet />
				</section>

				<section className='col-span-7 row-span-2 shadow-xl rounded-3xl xl:order-4 bg-blue-light xl:col-span-5 xl:row-span-3'>
					<Notes />
				</section>

				<section className='flex items-center justify-between col-span-7 row-span-1 px-4 shadow-xl rounded-3xl xl:order-5 bg-blue-light xl:col-span-5 xl:row-span-1'>
					<Bookmarks />
				</section>
			</main>
		</div>
	)
}

export default Main
