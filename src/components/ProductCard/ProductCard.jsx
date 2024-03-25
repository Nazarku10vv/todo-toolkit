import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './ProductCard.css'
import ListProduct from './ListProduct'
import PaginationProduct from '../PaginationProduct/PaginationProduct'

const ProductCard = () => {
	const todo = useSelector(state => state.todo.todo)

	const [page, setPage] = useState(1)
	const itemsParPage = 8
	const count = Math.ceil(todo.length / itemsParPage)

	function handlePage() {
		let start = (page - 1) * itemsParPage
		let end = start + itemsParPage

		return todo.slice(start, end)
	}

	return (
		<div>
			<section id='productCard'>
				<div className='container'>
					<div className='productCard '>
						<h1
							style={{
								color: 'white',
								paddingTop: 10
							}}
						>
							HOME
						</h1>
						<div className='pagination'>
							{todo.length > 8 ? (
								<PaginationProduct count={count} setPage={setPage} />
							) : (
								''
							)}
						</div>

						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								flexWrap: 'wrap',
								gap: '2pc'
							}}
							className='productCardBlocks'
						>
							{handlePage().map(el => (
								<ListProduct el={el} />
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ProductCard
