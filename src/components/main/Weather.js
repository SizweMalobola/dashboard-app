import React from 'react'

function Weather() {
	return (
		<div className='p-2 xl:max-w-lg'>
			{/* Temp and Icon */}
			<div className='flex items-center justify-around'>
				<div className='w-24 md:w-32 xl:w-48'>
					<img
						src={process.env.PUBLIC_URL + 'assets/rainy-mid.svg'}
						alt='Medium Rain'
					/>
				</div>

				<div>
					<h2 className='relative pr-2 text-4xl text-white md:text-5xl xl:text-6xl'>
						19
						<span className='absolute top-0 text-xs text-yellow-dark xl:text-sm'>
							o
						</span>
					</h2>
				</div>
			</div>

			{/* Location */}
			<div className='flex justify-center'>
				<h2 className='relative text-2xl text-white uppercase md:text-3xl xl:text-5xl md:px-4 md:py-1'>
					Pretoria
					<span className='absolute top-0 text-xs font-ropa-sans text-teal-light xl:text-base'>
						za
					</span>
				</h2>
			</div>

			{/* Other Information */}
			<div className='pt-2 md:pt-0 md:px-8 xl:pt-8 xl:px-0'>
				{/* Humidity & Wind Speed */}
				<div className='flex justify-between'>
					<div>
						<h2 className='hidden text-sm font-medium text-white align-left xl:text-xl md:flex md:text-base'>
							Humidity
						</h2>
						<div className='flex items-center justify-center pt-1'>
							<span className='pr-2 '>
								<img
									src={process.env.PUBLIC_URL + 'assets/humidity.svg'}
									alt='humidity'
									className='h-4 xl:h-6'
								/>
							</span>
							<h4 className='text-xs text-white'>45%</h4>
						</div>
					</div>

					<div>
						<h2 className='hidden text-sm font-medium text-white align-left xl:text-xl md:flex md:text-base'>
							Wind speed
						</h2>

						<div className='flex items-center justify-center pt-2'>
							<span className='pr-2 '>
								<img
									src={process.env.PUBLIC_URL + 'assets/wind.svg'}
									alt='wind speed'
									className='h-4 xl:h-6'
								/>
							</span>
							<h4 className='text-xs text-white xl:text-base'>
								12.5 km/h
							</h4>
						</div>
					</div>
				</div>

				{/* Air Pressure & Feels like */}
				<div className='flex justify-between pt-2 mt-1 xl:pt-8 xl:mt-2'>
					<div>
						<h2 className='hidden text-sm font-medium text-white align-left xl:text-xl md:flex md:text-base'>
							Air Pressure
						</h2>

						<div className='flex items-center justify-center pt-2'>
							<span className='pr-2 '>
								<img
									src={
										process.env.PUBLIC_URL + 'assets/air-pressure.svg'
									}
									alt='air pressure'
									className='h-4 xl:h-6'
								/>
							</span>
							<h4 className='text-xs text-white sm:flex xl:text-base'>
								1080 hPa
							</h4>
						</div>
					</div>

					<div>
						<h2 className='hidden text-sm font-medium text-white align-left xl:text-xl md:flex md:text-base'>
							Feels Like
						</h2>

						<div className='flex items-center justify-center pt-2'>
							<span className='pr-2 '>
								<img
									src={
										process.env.PUBLIC_URL + 'assets/feels-like.svg'
									}
									alt='feels like'
									className='h-4 xl:h-6'
								/>
							</span>
							<h4 className='text-xs text-white xl:text-base '>21</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather
