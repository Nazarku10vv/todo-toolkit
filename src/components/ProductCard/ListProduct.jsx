import React, { useState } from 'react'
import './ProductCard.css'
import { VscTrash } from 'react-icons/vsc'
import { VscHeartFilled } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket, deleteTask } from '../../store/slices/todo'

const ListProduct = ({ el }) => {
	const dispatch = useDispatch()

	const basket = useSelector(state => state.todo.basket)

	const [fovorite, setFovorite] = useState(false)

	return (
		<div className='productCardBlcok'>
			<img
				style={{
					width: '262px',
					height: '200px',
					objectFit: 'cover',
					display: 'flex',
					alignItems: 'center',
					borderRadius: '10px'
				}}
				src={el.img}
				alt=''
			/>
			<div
				style={{
					display: 'flex',
					alignItems: 'start',
					flexDirection: 'column',
					margin: '10px 0 20px 20px '
				}}
			>
				<h3 style={{}}>Name: {el.name}</h3>
				<h3 style={{ marginBottom: '20px' }}>Last Name: {el.lastName}</h3>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '12px'
					}}
				>
					<button
						style={{
							background: 'none',
							color: 'white',
							fontSize: '30px'
						}}
						onClick={() => dispatch(deleteTask(el.id))}
					>
						<VscTrash />
					</button>
					<button
						style={{
							background: 'none',
							color: 'white',
							fontSize: '30px'
						}}
						onClick={() => dispatch(addBasket(el), setFovorite(true))}
					>
						<VscHeartFilled
							style={{
								color: fovorite === true ? 'red' : 'white'
							}}
						/>
					</button>
					<button
						style={{
							background: 'none'
						}}
					></button>
				</div>
			</div>
		</div>
	)
}

export default ListProduct
