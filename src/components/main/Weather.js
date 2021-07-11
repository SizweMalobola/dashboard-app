import React, { useState, useEffect } from 'react'
import axios from 'axios'

const icons = {
	'clear sky': process.env.PUBLIC_URL + '/assets/weather/clear-sky.svg',
	'few clouds': process.env.PUBLIC_URL + '/assets/weather/few-clouds.svg',
	'scattered clouds':
		process.env.PUBLIC_URL + '/assets/weather/scattered-clouds.svg',
	'broken clouds':
		process.env.PUBLIC_URL + '/assets/weather/broken-clouds.svg',
	'shower rain': process.env.PUBLIC_URL + '/assets/weather/shower-rain.svg',
	rain: process.env.PUBLIC_URL + '/assets/weather/rain.svg',
	thunderstorm: process.env.PUBLIC_URL + '/assets/weather/thunderstorm.svg',
	snow: process.env.PUBLIC_URL + '/assets/weather/snow.svg',
	mist: process.env.PUBLIC_URL + '/assets/weather/mist.svg',
}

function Weather() {
	const [city, setCity] = useState('Unavailable')
	const [code, setCode] = useState('')
	const [temp, setTemp] = useState('')
	const [describe, setDescribe] = useState('')
	const [humidity, setHumidity] = useState('')
	const [wind, setWind] = useState('')
	const [pressure, setPressure] = useState('')
	const [feels, setFeels] = useState('')
	const [svg, setSvg] = useState('')

	useEffect(() => {
		axios
			.get('https://ipapi.co/json/')
			.then(response => {
				let data = response.data
				setCity(data.city)
				setCode(data.country_code)
			})
			.catch(error => {
				console.log('An error has occurred', error)
			})

		return () => {
			setCity('Unavailable')
		}
	}, [])

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
			)
			.then(response => {
				let data = response.data
				let temperature = Math.floor(data.main.temp - 273.15)
				let feelsLike = Math.floor(data.main.feels_like - 273.15)
				setTemp(temperature)
				setDescribe(data.weather[0].description)
				setHumidity(data.main.humidity)
				setWind(data.wind.speed)
				setPressure(data.main.pressure)
				setFeels(feelsLike)

				for (let icon in icons) {
					if (describe === 'clear sky') {
						setSvg('clear-sky.svg')
					} else if (describe === 'few clouds') {
						setSvg('few-clouds.svg')
					} else if (describe === 'scattered clouds') {
						setSvg('scattered-clouds.svg')
					} else if (describe === 'broken clouds') {
						setSvg('broken-clouds.svg')
					} else if (describe === 'shower rain') {
						setSvg('shower-rain.svg')
					} else if (describe === 'rain') {
						setSvg('rain.svg')
					} else if (describe === 'thunderstorm') {
						setSvg('/thunderstorm.svg')
					} else if (describe === 'snow') {
						setSvg('snow.svg')
					} else if (describe === 'mist') {
						setSvg('mist.svg')
					}
					return icon
				}
			})
			.catch(error => console.log('An error has occurred', error))
	}, [city, describe, svg])

	return (
		<div className='p-2 xl:max-w-lg'>
			{/* Temp and Icon */}
			<div className='flex items-center justify-around'>
				<div className='w-20 md:w-32 xl:w-36 xl:pt-3'>
					<img
						src={process.env.PUBLIC_URL + `/assets/weather/${svg}`}
						alt={describe}
					/>
				</div>

				<div>
					<h2 className='relative pr-2 text-4xl text-white md:text-5xl xl:text-6xl'>
						{temp}
						<span className='absolute top-0 text-xs text-yellow-dark xl:text-sm'>
							o
						</span>
					</h2>
				</div>
			</div>

			{/* Baring*/}
			<div className='flex justify-center pb-2 xl:pb-4'>
				<h4 className='text-base md:text-lg xl:text-2xl text-yellow-dark font-poppins'>
					{describe}
				</h4>
			</div>

			{/* Location */}
			<div className='flex justify-center pb-2'>
				<h2 className='relative text-xl text-white uppercase md:text-3xl xl:text-4xl md:px-4 md:py-1'>
					{city}
					<span className='absolute top-0 right-0 hidden text-xs sm:flex font-ropa-sans text-teal-light xl:text-base xl:pl-6'>
						{code}
					</span>
				</h2>
			</div>

			{/* Other Information */}
			<div className='pt-2 md:pt-0 md:px-8 xl:pt-8 xl:px-0'>
				{/* Humidity & Wind Speed */}
				<div className='flex items-center justify-between'>
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
							<h4 className='text-xs text-white'>{humidity}%</h4>
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
								{wind} km/h
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
								{pressure} hPa
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
							<h4 className='text-xs text-white xl:text-base '>
								{feels}
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather
