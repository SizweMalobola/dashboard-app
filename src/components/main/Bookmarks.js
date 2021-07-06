import React from 'react'

function Bookmarks() {
	return (
		<>
			<div className='flex items-center'>
				<div className='w-10 h-10 mx-2 bg-white rounded-full md:mx-3 xl:w-12 xl:h-12'></div>
			</div>
			<div>
				<button className='flex items-center justify-center w-10 h-10 text-xl text-white rounded-full focus:outline-none bg-blue-dark font-poppins'>
					+
				</button>
			</div>
		</>
	)
}

export default Bookmarks
