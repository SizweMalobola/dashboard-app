import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
	return (
		<h2 className='absolute flex items-center justify-center w-32 px-4 py-1 mt-4 overflow-hidden text-white transition transform translate-x-64 cursor-pointer rounded-2xl bg-blue-light font-ropa-sans right-1 hover:bg-blue-900 hover:text-gray-200'>
			<Link>Sign Out</Link>
		</h2>
	)
}

export default Menu
