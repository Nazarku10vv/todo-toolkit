import { InsertEmoticon } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketList from './BasketList'
import PaginationBasket from '../PaginationProduct/PaginationBasket'

const Basket = () => {
	const basket = useSelector(state => state.todo.basket)

	const [page, setPage] = useState(1)
	const itemsParPage = 8
	const count = Math.ceil(basket.length / itemsParPage)

	function handlePage() {
		let start = (page - 1) * itemsParPage
		let end = start + itemsParPage

		return basket.slice(start, end)
	}

	return (
		<div className='container'>
			<div className='productCard'>
				<div className='pagination'>
					{basket.length > 8 ? (
						<PaginationBasket count={count} setPage={setPage} />
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
					{handlePage().map((el, index) => (
						<BasketList el={el} index={index} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Basket
