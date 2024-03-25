import React from 'react'
import img1 from '../../image/1.png'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Hedaer = () => {
	const navigate = useNavigate()
	return (
		<div>
			<header id='header'>
				<div className='container'>
					<div className='header'>
						<img src={img1} alt='' />
						<div className='header-navs'>
							<h3 onClick={() => navigate('/')}>Home</h3>
							<h3 onClick={() => navigate('/basket')}>Favorite</h3>
							<h3 onClick={() => navigate('/admin')}>Admin</h3>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Hedaer
