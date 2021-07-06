import React from 'react'

function Notes() {
	return (
		<div className='flex flex-col items-center h-full p-3'>
			<div className='flex items-center justify-center w-full'>
				<input
					type='text'
					name='task'
					id='task'
					className='w-[80%] h-10 px-4 py-1 mx-2 rounded-full outline-none bg-blue-dark text-teal-light transition'
				/>

				<button className='flex items-center justify-center w-10 h-10 text-xl text-white transition rounded-full focus:outline-none bg-blue-dark font-poppins hover:text-yellow-dark active:text-white focus:text-yellow-dark hover:animate-spin'>
					+
				</button>
			</div>
			<div className='relative flex items-center justify-center w-full h-auto'>
				<div className='relative z-10 w-full h-10 px-4 py-1 mx-2 my-3 rounded-full outline-none xl:max-w-64 bg-blue-dark text-gray-300 xl:w-[90%] transition flex items-center justify-between'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-6 h-6 transition cursor-pointer text-blue-light hover:text-green-500 focus:text-green-500 hover:animate-pulse'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M5 13l4 4L19 7'
						/>
					</svg>
					<p className='text-left'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-6 h-6 transition transform cursor-pointer text-blue-light hover:text-red-500 hover:animate-bounce focus:text-red-500'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Notes
