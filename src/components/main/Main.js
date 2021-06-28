import React from 'react'
import Navigation from '../layout/Navigation'

function Main() {
	return (
		<div className='h-screen min-h-screen py-2 bg-blue-dark'>
			<Navigation />

			<main class='px-4 grid grid-cols-6 grid-rows-6 gap-2 h-[90vh]'>

            {/* Time Section */}
				<section className='flex items-center justify-center col-span-3 row-span-1 rounded-lg bg-blue-light'>
					<div>
						<h2 className='text-5xl text-teal-light font-semi-bold font-poppins'>
							18:02
						</h2>
					</div>
            </section>
            
            {/* Weather Section */}
				<section className='col-span-3 row-span-3 rounded-lg bg-blue-light'>
               <div>
                  
                  {/* Temp and Icon */}
                  <div className='flex'>
                     
                     <div>
                        <img src={process.env.PUBLIC_URL + 'assets/rain-cloud.svg'} alt="rain cloud"/>
                     </div>
                     
                     <div>
                        <h2>19</h2>
                     </div>
                     
                  </div>
                  
                  {/* Location */}
                  <div>
                     <h2>Pretoria <span>za</span></h2>
                  </div>

                  {/* Other Information */}
                  <div>
                     
                     {/* Humidity & Wind Speed */}
                     <div className='flex'>
                        
                        <div>
                           <h2>Humidity</h2>
                        </div>

                        <div>
                           <h2>Wind speed</h2>
                        </div>

                     </div>
                     
                     {/* Air Pressure & Feels like */}
                     <div className='flex'>

                        <div>
                           <h2>Air Pressure</h2>
                        </div>

                        <div>
                           <h2>Feels Like</h2>
                        </div>

                     </div>
                  </div>
					</div>
            </section>
                                                                              
            {/* Greeting & Date Section */}
				<section className='col-span-3 row-span-2 px-2 py-4 rounded-lg bg-blue-light'>
					<div className='flex flex-col justify-between'>
						<h2 className='py-2 text-3xl text-white font-poppins'>
							Hey Chris
						</h2>
						<h4 className='pt-3 text-2xl font-poppins text-teal-light'>
							<span className='block pb-1 text-xs tracking-wider text-yellow-dark font-ropa-sans'>
								Today is
							</span>
							Sunday, 18 May 2019
                     <span>
                        <img src={process.env.PUBLIC_URL + 'assets/calender.svg'} alt="calender"
                        />
                     </span>
						</h4>
					</div>
				</section>

            {/* Notes Section */}
				<section className='col-span-6 row-span-2 rounded-lg bg-blue-light'>
					<div>
						<h2>Note Area</h2>
					</div>
				</section>

            {/* Bookmark Section */}
				<section className='col-span-6 row-span-1 rounded-lg bg-blue-light '>
					<div>
						<h2>Bookmark area</h2>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Main
