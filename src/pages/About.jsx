import React from 'react'
import photo from '../images/background-1.png'
const About = () => {
  return (
	 <main className='about'>
		<div className="about-image">
			<img src={photo} alt="photo" />
		</div>
		<div className="about-container container">
			<h2 className="about-title">Don’t squeeze in a sedan when you could relax in a van.</h2>
			<p className='about-text'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
				(Hitch costs extra 😉)</p>
			<p className='about-text'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
			<div className="about-block">
				<h4 className='about-block-title'>Your destination is waiting. <br />
					Your van is ready.</h4>
				<button className='about-button'>Explore our vans</button>
			</div>
		</div>
	 </main>
  )
}

export default About