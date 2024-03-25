import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { Route, Routes } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import Basket from '../components/Basket/Basket'

const MyRoutes = () => {
	const routes = [
		{
			link: '/',
			element: <ProductCard />,
			key: 1
		},
		{
			link: '/admin',
			element: <Admin />,
			key: 2
		},
		{
			link: '/basket',
			element: <Basket />,
			key: 3
		}
	]
	return (
		<Routes>
			{routes.map(el => (
				<Route path={el.link} element={el.element} key={el.key} />
			))}
		</Routes>
	)
}

export default MyRoutes
