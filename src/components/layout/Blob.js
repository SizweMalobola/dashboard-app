import React from 'react'

function Blob() {
	return (
		<>
			<img
				src={process.env.PUBLIC_URL + '/assets/blobs.svg'}
				alt='blob for aesthetics'
				className='absolute top-0 right-0 z-0 blob'
			/>
		</>
	)
}

export default Blob
