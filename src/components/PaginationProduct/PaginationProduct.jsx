import React from 'react'
import Pagination from '@mui/material/Pagination'
import { useSelector } from 'react-redux'

const PaginationProduct = ({ count, setPage }) => {
	const todo = useSelector(state => state.todo.todo)

	function handlePagination(p, n) {
		setPage(n)
	}

	return (
		<div>
			<Pagination
				sx={{
					color: 'white'
				}}
				onChange={handlePagination}
				count={count}
				color='primary'
			/>
		</div>
	)
}

export default PaginationProduct
