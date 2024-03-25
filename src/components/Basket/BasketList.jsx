import React from 'react'
import { VscTrash } from 'react-icons/vsc'
import { VscHeartFilled } from 'react-icons/vsc'
import { deleteTaskBasket } from '../../store/slices/todo'
import { useDispatch } from 'react-redux'

const BasketList = ({ el, index }) => {
	const dispatch = useDispatch()
	return (
		<div key={index} className='productCardBlcok'>
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
						onClick={() => dispatch(deleteTaskBasket(el.id))}
					>
						<VscTrash />
					</button>
					<button
						style={{
							background: 'none',
							color: 'white',
							fontSize: '30px'
						}}
					>
						<VscHeartFilled
							style={{
								color: 'red'
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

export default BasketList
